"use server"


import axiosInstance from "@/src/lib/AxiosInstance";
import { customErrorResponse } from "@/src/utils/customErrorResponse";
import { AxiosError } from "axios";
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

export const GetAllPrimiumUser = async () => {
    try {
        const { data } = await axiosInstance.get(`/admin/premium-users`);
        return data;
    } catch (error: any) {

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



export const ChangeUserStatus = async (userId: string, status: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/admin/users/${userId}/block`, status);
        revalidateTag('CHANGE_STUTAS')
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


export const DelteSingleUserByAdmin = async (userId: string,) => {

    try {
        const { data } = await axiosInstance.delete(`/admin/users/${userId}`);
        revalidateTag('DELTE_USER')
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



export const getAllRecipeByAdmin = async (page: number) => {

    try {

        const { data } = await axiosInstance.get(`/recipes`, {
            params: {
                page
            }
        });
        return data;
    }
    catch (error) {
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
};

