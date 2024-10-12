"use server"

import envConfig from "@/src/config/envConfig"
import axiosInstance from "@/src/lib/AxiosInstance";
import { customErrorResponse } from "@/src/utils/customErrorResponse";
import { AxiosError } from "axios";

import { revalidateTag } from "next/cache";

import { FieldValues } from "react-hook-form";




export const getAllRecipeByAuthor = async (userId: string) => {

    try {

        const { data } = await axiosInstance.get(`/recipes/author/${userId}`);
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




export const getAllRecipe = async () => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-store",
    };
    try {
        const { data } = await axiosInstance.get(`/recipes`, fetchOptions);
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
};


export const geSingleRecipe = async (recipeId: string) => {
    let fetchOptions = {};
    fetchOptions = {
        cache: "no-store",
    };

    try {

        const { data } = await axiosInstance.get(`/recipes/${recipeId}`, fetchOptions);

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
};




export const getSpecificRecipe = async (recipeId: string) => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-cache",
    };
    const res = await fetch(`${envConfig.baseApi}/recipes/${recipeId}`, fetchOptions);
    return res.json();

}



export const CreateRecipe = async (recipeData: FormData): Promise<any> => {
    try {
        const data = await axiosInstance.post("/recipes", recipeData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },

        });


        revalidateTag("recipes");


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


};


export const UpdateRecipe = async (recipeId: string, recipeData: FieldValues) => {
    try {


        const { data } = await axiosInstance.put(`/recipes/${recipeId}`, recipeData);
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
};


export const DeleteRecipe = async (recipeId: string,) => {

    try {

        const { data } = await axiosInstance.delete(`/recipes/${recipeId}`);
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

};



