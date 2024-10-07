"use server"


import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";



export const GetAllUserByAdmin = async () => {
    try {
        const { data } = await axiosInstance.get(`/admin/users`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}

export const GetAllPrimiumUser = async () => {
    try {
        const { data } = await axiosInstance.get(`/admin/premium-users`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}



export const ChangeUserStatus = async (userId: string, status: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/admin/users/${userId}/block`, status);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}


export const DelteSingleUserByAdmin = async (userId: string,) => {

    try {
        const { data } = await axiosInstance.delete(`/admin/users/${userId}`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }

}


export const CreateAdmin = async (adminData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post(`/admin/create-admin`, adminData);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}


export const PublishRecipe = async (recipeData: FieldValues) => {
    try {
        const { data } = await axiosInstance.put(`/admin/recipes/publish`, recipeData);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }


}

