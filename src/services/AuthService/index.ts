"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies, } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {

    try {
        const { data } = await axiosInstance.post('/auth/signUp', userData);

        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken);
            cookies().set("refreshToken", data?.data?.refreshToken);
        }
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }

}


export const loginUser = async (userData: FieldValues) => {

    try {
        const { data } = await axiosInstance.post('/auth/login', userData);
        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken);
            cookies().set("refreshToken", data?.data?.refreshToken);

        }
        return data;
    } catch (error: any) {


        return {
            success: false,
            message: error.response.data.message,
        };

    }
}


export const logOut = () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
}


export const getCurrentUser = async () => {

    const accessToken = cookies().get("accessToken")?.value;


    let decodedToken = null;
    if (accessToken) {
        decodedToken = await jwtDecode(accessToken);
        return {
            userId: decodedToken.userId,
            username: decodedToken.username,
            name: decodedToken.name,
            email: decodedToken.email,
            phoneNumber: decodedToken.phoneNumber,
            role: decodedToken.role,
            status: decodedToken.status,
            profilePicture: decodedToken.profilePicture
        }
    }


    return decodedToken;
}


export const getNewAccessToken = async () => {
    try {
        const refreshToken = cookies().get("refreshToken")?.value;
        const res = await axiosInstance({
            url: "/auth/refresh-token",
            method: "POST",

            withCredentials: true,

            headers: {
                cookies: `refreshToken=${refreshToken}`,
            },
        });

        return res.data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response.data.message,
        };

    }
};


export const forgotPassword = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post('/auth/forget-password', userData);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }
}



export const resetPassword = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post('/auth/reset-password',
            {
                newPassword: userData.newPassword
                , email: userData.email
            },
            {
                headers: {
                    Authorization: userData.token,
                }
            });
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }
}



export const changePassword = async (passwordData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post('/auth/change-password', passwordData);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }
}


export const cureentUserChecker = async () => {

    const token = cookies().get("accessToken")?.value;

    return token;

}
