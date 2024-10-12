
"use server"

import axiosInstance from "@/src/lib/AxiosInstance";
import { customErrorResponse } from "@/src/utils/customErrorResponse";
import { AxiosError } from "axios";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";


export const CreateComment = async (recipeId: string, comment: FieldValues) => {



    try {
        const { data } = await axiosInstance.post(`/social-conectivity/${recipeId}/comments`, comment);
        revalidateTag('commentTag')
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}


export const GetComments = async (recipeId: string,) => {

    try {
        const { data } = await axiosInstance.get(`/social-conectivity/${recipeId}/comments`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}

export const EditComment = async (commentId: string, comment: FieldValues) => {

    try {

        const { data } = await axiosInstance.put(`/social-conectivity/comments/${commentId}`, comment);
        revalidateTag('commentTag')
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}


export const deleteComments = async (recipeId: string, commentId: string) => {


    try {
        const { data } = await axiosInstance.delete(`/social-conectivity/${recipeId}/comments/${commentId}`);
        revalidateTag('commentTag')
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