"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { signIn } from "next-auth/react";

import { loginValidationSchema } from "@/src/schemas/loginValidation.schema";
import { useUser } from "@/src/context/cureentUser";
import Loading from "@/src/components/UI/Loading";
import { useUserLogin } from "@/src/hooks/authHooks";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  // Use zodResolver with the loginValidationSchema
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema), // Add this line
  });
  const {
    mutate: handleUserLogin,
    isPending,
    isSuccess,
    data,
  } = useUserLogin();
  const { setIsLoading: userLoading } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (data && !data?.success) {
      toast.error(data?.message as string);
    }

    if (!isPending && isSuccess) {
      toast.success(data?.message as string);
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/recipe-feeds");
      }
    }
  }, [isPending, isSuccess, data]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    handleUserLogin(data);
    userLoading(true);
  };

  // Function to autofill the login form
  const autofillCredentials = (role: string) => {
    if (role === "user") {
      setValue("email", "user@gmail.com");
      setValue("password", "123456");
    } else if (role === "admin") {
      setValue("email", "admin@gmail.com");
      setValue("password", "123456");
    }
  };

  return (
    <>
      {isPending && <Loading />}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]  px-4 sm:px-0">
        <h3 className="my-2 text-2xl font-bold text-center md:text-3xl">
          Login with Recipe Sharing Community
        </h3>
        <p className="mb-4 text-center text-sm md:text-base">
          Welcome Back! Let&lsquo;s Get Started
        </p>
        <div className="w-full max-w-md">
          {" "}
          {/* Adjust width with max-w-md for larger screens */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-3">
              <Input
                {...register("email")}
                isInvalid={!!errors.email}
                label="Email"
                size="md"
                type="email"
                variant="bordered"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message as string}
                </p>
              )}
            </div>
            <div className="py-3">
              <Input
                {...register("password")}
                endContent={
                  <button
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                  >
                    {showPassword ? (
                      <span aria-label="Hide password" role="img">
                        👁️
                      </span>
                    ) : (
                      <span aria-label="Show password" role="img">
                        🙈
                      </span>
                    )}
                  </button>
                }
                isInvalid={!!errors.password}
                label="Password"
                size="md"
                type={showPassword ? "text" : "password"}
                variant="bordered"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            {/* User and Admin Credential Buttons */}
            <div className="flex flex-col sm:flex-row justify-between my-4 space-y-2 sm:space-y-0">
              <Button
                // type="button"
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
                size="sm"
                onClick={() => autofillCredentials("user")}
              >
                User Credential
              </Button>
              <Button
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
                size="sm"
                type="button"
                onClick={() => autofillCredentials("admin")}
              >
                Admin Credential
              </Button>
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className="flex justify-between items-center py-2">
            <Link
              className="text-sm text-blue-500 hover:underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            Don&lsquo;t have account?{" "}
            <Link className="text-blue-500 hover:underline" href={"/register"}>
              Register
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-4 mb-10 mt-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Sign in with
            </h2>
            <div className="flex justify-center space-x-6">
              <Button
                isIconOnly
                aria-label="Sign in with Google"
                className="bg-white shadow-lg hover:shadow-xl rounded-full transition-transform duration-200 transform hover:scale-105"
                onClick={() =>
                  signIn("google", { callbackUrl: "http://localhost:3000" })
                }
              >
                <Image
                  alt="Google logo"
                  height={40}
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  width={40}
                />
              </Button>
              <Button
                isIconOnly
                aria-label="Sign in with GitHub"
                className="bg-white shadow-lg hover:shadow-xl rounded-full transition-transform duration-200 transform hover:scale-105"
                onClick={() =>
                  signIn("github", { callbackUrl: "http://localhost:3000" })
                }
              >
                <Image
                  alt="GitHub logo"
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  width={40}
                />
              </Button>
            </div>
            <div className="flex space-x-6 mt-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Google
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
