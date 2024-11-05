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


interface RecipeParams {
    feedType: 'premium' | 'freemium' | '';
    page?: number;
    sort?: string;
    search?: string;
}


interface RecipeResponse {
    success: boolean;
    data?: any;
    message?: string;
}


export const UnivarsalRecipe = async ({ feedType, page, sort, search }: RecipeParams) => {

    console.log({ feedType, page, sort, search })
    try {
        const endpoint = feedType === "premium" ? "/feed/premium" : "/feed";
        const { data } = await axiosInstance.get(endpoint, {
            params: { page, sort, search },

        });

        console.log('inside server universsal==>', data)


        return data;
    } catch (error: any) {
        console.log(error)
        return {
            success: false,
            message: error.response.data.message,
        };

    }

}






