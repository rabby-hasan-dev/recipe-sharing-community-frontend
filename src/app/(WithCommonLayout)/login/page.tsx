"use client";


import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from '@hookform/resolvers/zod';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUserLogin } from "@/src/hooks/authHooks";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/context/cureentUser";
import { toast } from "sonner";
import { Input } from "@nextui-org/input";
import { loginValidationSchema } from "@/src/schemas/loginValidation.schema";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const redirect = searchParams.get("redirect");
    // Use zodResolver with the loginValidationSchema
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginValidationSchema), // Add this line
    });
    const { mutate: handleUserLogin, isPending, isSuccess, data, } = useUserLogin();
    const { setIsLoading: userLoading } = useUser();
    const [showPassword, setShowPassword] = useState(false);



    useEffect(() => {

        if (data && !data?.success) {
            toast.error(data?.message as string);
        }

        if (!isPending && isSuccess) {
            toast.success(data?.message as string);
            if (redirect) {
                router.push(redirect)

            } else {
                router.push('/recipe-feeds')
            }

        }

    }, [isPending, isSuccess, data])


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)

        handleUserLogin(data);
        userLoading(true);



    };


    // Function to autofill the login form
    const autofillCredentials = (role: string) => {
        if (role === 'user') {
            setValue("email", "user@gmail.com");
            setValue("password", "123456");
        } else if (role === 'admin') {
            setValue("email", "admin@gmail.com");
            setValue("password", "123456");
        }
    };



    return (


        <>
            {isPending && <Loading />}
            <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]  px-4 sm:px-0">
                <h3 className="my-2 text-2xl font-bold text-center md:text-3xl">Login with Recipe Sharing Community</h3>
                <p className="mb-4 text-center text-sm md:text-base">Welcome Back! Let&lsquo;s Get Started</p>
                <div className="w-full max-w-md"> {/* Adjust width with max-w-md for larger screens */}
                    <form

                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="py-3">
                            <Input
                                {...register("email")}
                                isInvalid={!!errors.email}
                                size="md"
                                variant="bordered"
                                label="Email"
                                type="email"

                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>}
                        </div>
                        <div className="py-3">
                            <Input
                                {...register("password")}
                                isInvalid={!!errors.password}
                                size="md"
                                variant="bordered"
                                label="Password"
                                type={showPassword ? "text" : "password"}

                                endContent={
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <span role="img" aria-label="Hide password">👁️</span>
                                        ) : (
                                            <span role="img" aria-label="Show password">🙈</span>
                                        )}
                                    </button>
                                }
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message as string}</p>}

                        </div>

                        {/* User and Admin Credential Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between my-4 space-y-2 sm:space-y-0">
                            <Button
                                // type="button"
                                size="sm"
                                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
                                onClick={() => autofillCredentials('user')}

                            >
                                User Credential
                            </Button>
                            <Button
                                size="sm"
                                type="button"
                                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
                                onClick={() => autofillCredentials('admin')}
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
                        <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="text-center">
                        Don&lsquo;t have account? <Link href={"/register"} className="text-blue-500 hover:underline">Register</Link>
                    </div>

                    <div className="flex flex-col items-center space-y-4 mb-10 mt-4">
                        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Sign in with</h2>
                        <div className="flex justify-center space-x-6">
                            <Button
                                isIconOnly
                                className="bg-white shadow-lg hover:shadow-xl rounded-full transition-transform duration-200 transform hover:scale-105"
                                onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000' })}
                                aria-label="Sign in with Google"
                            >
                                <Image
                                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                    width={40}
                                    height={40}
                                    alt="Google logo"
                                />
                            </Button>
                            <Button
                                isIconOnly
                                className="bg-white shadow-lg hover:shadow-xl rounded-full transition-transform duration-200 transform hover:scale-105"
                                onClick={() => signIn("github", { callbackUrl: 'http://localhost:3000' })}
                                aria-label="Sign in with GitHub"
                            >
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                    width={40}
                                    height={40}
                                    alt="GitHub logo"
                                />
                            </Button>
                        </div>
                        <div className="flex space-x-6 mt-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Google</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">GitHub</span>
                        </div>
                    </div>


                </div>
            </div>
        </>









    );
};

export default LoginPage;