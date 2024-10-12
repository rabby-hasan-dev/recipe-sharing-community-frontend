'use server'


import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";
import { customErrorResponse } from "@/src/utils/customErrorResponse";
import { AxiosError } from "axios";


export const getPublicRecipe = async () => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-cache",
    };
    const res = await fetch(`${envConfig.baseApi}/feed`, fetchOptions);

    return res.json();


}

export const getPrimiumRecipe = async () => {

    try {
        const { data } = await axiosInstance.get(`/feed/premium`);
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



