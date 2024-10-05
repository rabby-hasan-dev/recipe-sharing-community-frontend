
"use server"

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const CreateComment = async (recipeId: string, comment: FieldValues) => {



    try {
        const { data } = await axiosInstance.post(`social-conectivity/${recipeId}/comments`, comment);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}


export const GetComments = async (recipeId: string,) => {

    try {
        const { data } = await axiosInstance.get(`social-conectivity/${recipeId}/comments`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}

export const EditComment = async (commentId: string, comment: FieldValues) => {

    console.log('inside edit comment api==>', comment);

    try {
        const { data } = await axiosInstance.put(`/social-conectivity/comments/${commentId}`, comment);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}


export const deleteComments = async (recipeId: string, commentId: string) => {

    try {
        const { data } = await axiosInstance.delete(`social-conectivity/${recipeId}/comments/${commentId}`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}