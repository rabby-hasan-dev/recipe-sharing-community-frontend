"use server"



import axiosInstance from "@/src/lib/AxiosInstance";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";






export const CreateVotes = async (recipeId: string, vote: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/social-conectivity/${recipeId}/votes`, vote);
        revalidateTag('voteTag')


        return data;




    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };

    }
}

