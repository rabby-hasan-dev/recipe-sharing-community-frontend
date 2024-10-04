'use client'
import { useUserLogin } from '@/src/hooks/authHooks';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const LogingPage = () => {

    const router = useRouter();
    const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

    useEffect(() => {

        if (!isPending && isSuccess) {

            router.push('/')

        }

    }, [isPending, isSuccess])

    const onSubmit = (data) => {
        data.preventDefault();

        const email = data.target.email.value
        const password = data.target.password.value
        console.log();
        const logindata = {
            email: email,
            password: password
        }

        handleUserLogin(logindata);



    };


    return (
        <div>
            this is login page

            <form onSubmit={onSubmit} >
                <input type="text" id='email' name='email' />
                <input type="text" id='password' name='password' />
                <button type='submit' >Submit</button>
            </form>

        </div>
    );
};


export default LogingPage;