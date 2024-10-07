import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const PurcaseSubscriptions = async (subcriptionDAta: FieldValues) => {

    try {
        const { data } = await axiosInstance.post(`/premium-membership/purchase`, subcriptionDAta);

        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}


export const CheckSubscriptionsStatus = async () => {

    try {
        const { data } = await axiosInstance.get(`/premium-membership/active`,);

        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}