"use server"


import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";



export const GetAllUserByAdmin = async (page: number) => {
    try {
        const { data } = await axiosInstance.get(`/admin/users`, {
            params: {
                page
            }
        });
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };
    }


}

export const GetAllPrimiumUser = async () => {
    try {
        const { data } = await axiosInstance.get(`/admin/premium-users`);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };
    }


}



export const ChangeUserStatus = async (userId: string, status: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/admin/users/${userId}/block`, status);
        revalidateTag('CHANGE_STUTAS')
        return data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response.data.message,
        };


    }


}


export const DelteSingleUserByAdmin = async (userId: string,) => {

    try {
        const { data } = await axiosInstance.delete(`/admin/users/${userId}`);
        revalidateTag('DELTE_USER')
        return data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response.data.message,
        };

    }

}


export const CreateAdmin = async (adminData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post(`/admin/create-admin`, adminData);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };
    }


}


export const PublishRecipe = async (recipeData: FieldValues) => {

    try {

        const { data } = await axiosInstance.put(`/admin/recipes/publish`, recipeData);
        revalidateTag('PUBLISH')
        return data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response.data.message,
        };

    }


}



export const getAllRecipeByAdmin = async (page: number) => {

    try {

        const { data } = await axiosInstance.get(`/recipes`, {
            params: {
                page
            }
        });
        return data;
    }
    catch (error: any) {
        return {
            success: false,
            message: error.response.data.message,
        };

    }
};

