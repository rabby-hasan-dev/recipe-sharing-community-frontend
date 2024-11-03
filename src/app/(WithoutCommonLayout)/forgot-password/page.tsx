'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import RSForm from "@/src/components/form/RSForm";
import RSInput from "@/src/components/form/RSInput";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordValidationSchema } from "@/src/schemas/loginValidation.schema";
import { useRouter, useSearchParams } from "next/navigation";
import { useForgotPassword } from "@/src/hooks/authHooks";
import { useUser } from "@/src/context/cureentUser";
import { useEffect } from "react";
import Loading from "@/src/components/UI/Loading";
import { toast } from "sonner";

const ForgotPassword = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const redirect = searchParams.get("redirect");
    const { mutate: handleforgotPassword, isPending, isSuccess, data } = useForgotPassword();
    const { setIsLoading: userLoading } = useUser();

    useEffect(() => {

        if (data && !data?.success) {
            toast.error(data?.message as string);
        }


        if (!isPending && isSuccess && data?.success) {
            toast.success(data?.message as string);
            if (redirect) {
                router.push(redirect)

            } else {
                router.push('/')
            }

        }

    }, [isPending, isSuccess, data])


    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        handleforgotPassword(data);
        userLoading(true);
    };


    return (
        <>
            {
                isPending && <Loading></Loading>
            }
            <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
                <h3 className="my-4 text-3xl font-bold ">Forgot Password</h3>
                <p className="mb-6 text-lg">Enter your email to reset your password</p>

                <div className="w-full max-w-md">
                    <RSForm
                        onSubmit={onSubmit}
                        resolver={zodResolver(forgotPasswordValidationSchema)}
                    >
                        <div className="py-4">
                            <RSInput
                                name="email"
                                label="Email"
                                type="email"
                            />
                        </div>

                        <Button
                            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                            size="lg"
                            type="submit"
                        >
                            Reset Password
                        </Button>
                    </RSForm>

                    <div className="text-center mt-4 ">
                        Remember your password? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
