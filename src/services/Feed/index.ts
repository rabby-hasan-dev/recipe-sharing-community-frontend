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
        return {
            success: false,
            message: error.response.data.message,
        };

    }

}



