"use server"


import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";



//  delete this next time just for ui concept
export const GetAllUser = async () => {
    try {
        const { data } = await axiosInstance.get(`/users`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}


export const GetSingleUser = async (userId: string,) => {


    try {
        const { data } = await axiosInstance.get(`/users/${userId}`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }

}



export const GetMe = async () => {
    try {
        const { data } = await axiosInstance.get(`/users/me`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}


export const GetMeAnUpdate = async (meUpdateData: FormData) => {
    try {

        const { data } = await axiosInstance.post("/users/me", meUpdateData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });


        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}

