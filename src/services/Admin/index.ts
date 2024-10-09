"use server"


import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";



export const GetAllUserByAdmin = async () => {
    try {
        const { data } = await axiosInstance.get(`/admin/users`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}

export const GetAllPrimiumUser = async () => {
    try {
        const { data } = await axiosInstance.get(`/admin/premium-users`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}



export const ChangeUserStatus = async (userId: string, status: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/admin/users/${userId}/block`, status);
        revalidateTag('CHANGE_STUTAS')
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}


export const DelteSingleUserByAdmin = async (userId: string,) => {

    try {
        const { data } = await axiosInstance.delete(`/admin/users/${userId}`);
        revalidateTag('DELTE_USER')
        return data;
    } catch (error: any) {

        throw new Error(error)
    }

}


export const CreateAdmin = async (adminData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post(`/admin/create-admin`, adminData);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}


export const PublishRecipe = async (recipeData: FieldValues) => {

    try {

        const { data } = await axiosInstance.put(`/admin/recipes/publish`, recipeData);
        revalidateTag('PUBLISH')
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}



export const getAllRecipeByAdmin = async () => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-store",
    };
    const { data } = await axiosInstance.get(`/recipes`, fetchOptions);

    return data;
};

