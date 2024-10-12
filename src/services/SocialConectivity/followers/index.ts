'use server'

import axiosInstance from "@/src/lib/AxiosInstance";
import { customErrorResponse } from "@/src/utils/customErrorResponse";
import { AxiosError } from "axios";
import { revalidateTag } from "next/cache";


export const followUser = async (followUserId: string,) => {
    try {
        const { data } = await axiosInstance.post(`/follow/follow/${followUserId}`);
        revalidateTag('FOLLOW_USER')
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


export const unFollowUser = async (unFollowUserId: string,) => {
    try {

        const { data } = await axiosInstance.post(`/follow/unfollow/${unFollowUserId}`);
        revalidateTag('UNFOLLOW_USER')
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

