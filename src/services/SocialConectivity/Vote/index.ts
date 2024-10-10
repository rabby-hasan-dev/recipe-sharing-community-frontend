"use server"



import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";





export const CreateVotes = async (recipeId: string, vote: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/social-conectivity/${recipeId}/votes`, vote);
        revalidateTag('voteTag')
        return data;
    } catch (error: any) {

        console.log(error);
        throw new Error(error)
    }
}

