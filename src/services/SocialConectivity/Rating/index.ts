import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";



export const CreateRating = async (recipeId: string, rating: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/social-conectivity/${recipeId}/rating`, rating);

        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}


export const GetRating = async (recipeId: string,) => {
    try {
        const { data } = await axiosInstance.get(`/social-conectivity/${recipeId}/ratings`,);

        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}

