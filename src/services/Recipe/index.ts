"use server"

import envConfig from "@/src/config/envConfig"
import axiosInstance from "@/src/lib/AxiosInstance";
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
    const res = await fetch(`${envConfig.baseApi}/recipes/${recipeId}`, fetchOptions);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};



export const CreateRecipe = async (recipeData: FieldValues) => {

    const { data } = await axiosInstance.post(`${envConfig.baseApi}/recipes`, recipeData);
    return data;
};

export const UpdateRecipe = async (recipeId: string, recipeData: FieldValues) => {

    const { data } = await axiosInstance.put(`${envConfig.baseApi}/recipes/${recipeId}`, recipeData);
    return data;
};


export const DeleteRecipe = async (recipeId: string,) => {

    const { data } = await axiosInstance.put(`${envConfig.baseApi}/recipes/${recipeId}`);
    return data;
};

