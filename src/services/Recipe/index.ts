"use server"

import envConfig from "@/src/config/envConfig"
import axiosInstance from "@/src/lib/AxiosInstance";
import axios from "axios";
import { revalidateTag } from "next/cache";

import { FieldValues } from "react-hook-form";



export const getRecipe = async () => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-cache",
    };

    const res = await fetch(`${envConfig.baseApi}/recipes`, fetchOptions);

    return res.json();

}

export const getUserMatchAllRecipe = async (userId: string) => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-cache",
    };

    const res = await fetch(`${envConfig.baseApi}/recipes?author=${userId}`, fetchOptions);

    return res.json();

}




export const geSingleRecipe = async (recipeId: string) => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-store",
    };
    const { data } = await axiosInstance.get(`/recipes/${recipeId}`, fetchOptions);

    return data;
};



export const CreateRecipe = async (recipeData: FormData): Promise<any> => {


    try {
        const data = await axiosInstance.post("/recipes", recipeData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        revalidateTag("recipes");


        return data;
    } catch (error: any) {

        throw new Error(error.message);
    }


};


export const UpdateRecipe = async (recipeId: string, recipeData: FieldValues) => {

    const { data } = await axiosInstance.put(`/recipes/${recipeId}`, recipeData);
    return data;
};


export const DeleteRecipe = async (recipeId: string,) => {

    const { data } = await axiosInstance.delete(`/recipes/${recipeId}`);
    return data;
};

