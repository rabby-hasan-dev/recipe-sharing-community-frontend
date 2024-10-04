"use client";

import { loginValidationSchema } from "@/src/schemas/loginValidation.schema";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from '@hookform/resolvers/zod';

import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUserLogin } from "@/src/hooks/authHooks";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/src/context/user.provider";
import Loading from "@/src/components/UI/Loading";
import RSForm from "@/src/components/form/RSForm";
import RSInput from "@/src/components/form/RSInput";

const LoginPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const redirect = searchParams.get("redirect");

    const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
    const { setIsLoading: userLoading } = useUser();

    useEffect(() => {

        if (!isPending && isSuccess) {

            if (redirect) {
                router.push(redirect)

            } else {
                router.push('/')
            }

        }

    }, [isPending, isSuccess])


    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        handleUserLogin(data);
        userLoading(true);


    };

    return (
        <>
            {
                isPending && <Loading></Loading>
            }
            <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
                <h3 className="my-2 text-2xl font-bold">Login with Recipe Sharing Community</h3>
                <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
                <div className="w-[35%]">
                    <RSForm
                        onSubmit={onSubmit}
                        resolver={zodResolver(loginValidationSchema)}

                    >
                        <div className="py-3">
                            <RSInput name="email" label="Email" type="email" />
                        </div>
                        <div className="py-3">
                            <RSInput name="password" label="Password" type="password" />
                        </div>

                        <Button
                            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                            size="lg"
                            type="submit"
                        >
                            Login
                        </Button>
                    </RSForm>

                    <div className="text-center">
                        Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;