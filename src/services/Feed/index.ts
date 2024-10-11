'use server'


import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";


export const getPublicRecipe = async () => {
    let fetchOptions = {};

    fetchOptions = {
        cache: "no-cache",
    };
    const res = await fetch(`${envConfig.baseApi}/feed`, fetchOptions);

    return res.json();


}

export const getPrimiumRecipe = async () => {

    try {
        const { data } = await axiosInstance.get(`/feed/premium`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }

}



import axios from "axios";
import Cookies from "js-cookie";


const axiosClient = axios.create({
    baseURL: envConfig.baseApi,
    headers: {
        "Content-Type": "application/json",
    },
});


export const fetchRecipes = async (searchTerm = "", page = 1, sort = "-upVoteCount", feedType = "") => {
    try {
        const token = Cookies.get("accessToken"); // Get token from cookie if available
        if (token) {
            axiosClient.defaults.headers["Authorization"] = token;
        }

        const response = await axiosClient.get(`/feed${feedType === "premium" ? "/premium" : ""}`, {
            params: {
                searchTerm,
                page,
                sort,
            },
        });
        return response.data.data; // Return the list of recipes
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};
