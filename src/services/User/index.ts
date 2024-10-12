"use server"


import axiosInstance from "@/src/lib/AxiosInstance";
import { customErrorResponse } from "@/src/utils/customErrorResponse";
import { AxiosError } from "axios";



//  delete this next time just for ui concept
export const GetAllUser = async () => {
    try {
        const { data } = await axiosInstance.get(`/users`);
        return data;
    } catch (error) {

        const responseError = customErrorResponse(error as AxiosError);
        // Check if responseError has a 'data' property
        if (typeof responseError === "object" && "data" in responseError) {
            throw new Error(responseError.data.message);
        } else if (typeof responseError === "string") {
            throw new Error(responseError); // Throw string message directly
        } else {
            throw new Error("An unknown error occurred."); // Fallback error
        }
    }


}


export const GetSingleUser = async (userId: string,) => {


    try {
        const { data } = await axiosInstance.get(`/users/${userId}`);
        return data;
    } catch (error) {

        const responseError = customErrorResponse(error as AxiosError);
        // Check if responseError has a 'data' property
        if (typeof responseError === "object" && "data" in responseError) {
            throw new Error(responseError.data.message);
        } else if (typeof responseError === "string") {
            throw new Error(responseError); // Throw string message directly
        } else {
            throw new Error("An unknown error occurred."); // Fallback error
        }
    }

}



export const GetMe = async () => {
    try {
        const { data } = await axiosInstance.get(`/users/me`);
        return data;
    } catch (error) {

        const responseError = customErrorResponse(error as AxiosError);
        // Check if responseError has a 'data' property
        if (typeof responseError === "object" && "data" in responseError) {
            throw new Error(responseError.data.message);
        } else if (typeof responseError === "string") {
            throw new Error(responseError); // Throw string message directly
        } else {
            throw new Error("An unknown error occurred."); // Fallback error
        }
    }


}


export const GetMeAnUpdate = async (meUpdateData: FormData) => {
    try {

        const { data } = await axiosInstance.put("/users/me", meUpdateData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return data;
    } catch (error) {

        const responseError = customErrorResponse(error as AxiosError);
        // Check if responseError has a 'data' property
        if (typeof responseError === "object" && "data" in responseError) {
            throw new Error(responseError.data.message);
        } else if (typeof responseError === "string") {
            throw new Error(responseError); // Throw string message directly
        } else {
            throw new Error("An unknown error occurred."); // Fallback error
        }
    }


}

