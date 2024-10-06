"use server"

import envConfig from "@/src/config/envConfig"



export const getRecipe = async () => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-cache",
    };

    const res = await fetch(`${envConfig.baseApi}/recipes`, fetchOptions);

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

