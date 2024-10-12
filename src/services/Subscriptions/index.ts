'use server'

import axiosInstance from "@/src/lib/AxiosInstance";
import { customErrorResponse } from "@/src/utils/customErrorResponse";
import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";


export const PurcaseSubscriptions = async (subcriptionDAta: FieldValues) => {


    try {
        const { data } = await axiosInstance.post(`/premium-membership/purchase`, subcriptionDAta);

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


export const CheckSubscriptions = async () => {

    try {
        const { data } = await axiosInstance.get(`/premium-membership/active`,);

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

export const GetAllSubscriber = async () => {

    try {
        const { data } = await axiosInstance.get(`/premium-membership/subscriber`,);
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