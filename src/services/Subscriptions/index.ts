'use server'

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const PurcaseSubscriptions = async (subcriptionDAta: FieldValues) => {


    try {
        const { data } = await axiosInstance.post(`/premium-membership/purchase`, subcriptionDAta);

        return data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response.data.message,
        };

    }
}


export const CheckSubscriptions = async () => {

    try {
        const { data } = await axiosInstance.get(`/premium-membership/active`,);

        return data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response.data.message,
        };

    }
}

export const GetAllSubscriber = async () => {

    try {
        const { data } = await axiosInstance.get(`/premium-membership/subscriber`,);
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };
    }

}

