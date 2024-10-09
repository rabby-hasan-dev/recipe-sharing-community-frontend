

import envConfig from "../config/envConfig";

// getPrimiumRecipe API 
export const useGetPrimiumRecipe = async (pageNum: number) => {
    const response = await fetch(`${envConfig.baseApi}/feed/premium?page=${pageNum}`);
    const data = await response.json();
    return { data };
};

// Similarly for public feed
export const useGetPublicRecipe = async (pageNum: number) => {
    const response = await fetch(`${envConfig.baseApi}/feed?page=${pageNum}`);
    const data = await response.json();
    return { data };
};


// const res = await fetch(`${envConfig.baseApi}/feed?page=${page}`);
// const data = await res.json();

