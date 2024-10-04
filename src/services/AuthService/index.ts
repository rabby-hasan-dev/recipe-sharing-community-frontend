"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {

    try {
        const { data } = await axiosInstance.post('/auth/register', userData);
        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken);
            cookies().set("refreshToken", data?.data?.refreshToken);
        }
        return data;
    } catch (error: any) {

        throw new Error(error)
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

        throw new Error(error)
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
    } catch (error) {
        throw new Error("Failed to get new access token");
    }
};