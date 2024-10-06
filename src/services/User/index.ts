"use server"


import axiosInstance from "@/src/lib/AxiosInstance";



export const GetSingleUser = async (userId: string,) => {


    try {
        const { data } = await axiosInstance.get(`/users/${userId}`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }

}