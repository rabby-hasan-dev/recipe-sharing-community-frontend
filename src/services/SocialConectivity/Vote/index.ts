"use server"



import axiosInstance from "@/src/lib/AxiosInstance";
import { customErrorResponse } from "@/src/utils/customErrorResponse";
import { AxiosError } from "axios";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";






export const CreateVotes = async (recipeId: string, vote: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/social-conectivity/${recipeId}/votes`, vote);
        revalidateTag('voteTag')
        return data;
    } catch (error) {
        const responseError = customErrorResponse(error as AxiosError);
        console.log('from vote ==>', responseError);
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

