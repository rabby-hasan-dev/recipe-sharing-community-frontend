'use server'

import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";


export const followUser = async (followUserId: string,) => {
    try {
        const { data } = await axiosInstance.post(`/follow/follow/${followUserId}`);
        revalidateTag('FOLLOW_USER')
        return data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response.data.message,
        };
    }
}


export const unFollowUser = async (unFollowUserId: string,) => {
    try {

        const { data } = await axiosInstance.post(`/follow/unfollow/${unFollowUserId}`);
        revalidateTag('UNFOLLOW_USER')
        return data;
    } catch (error: any) {

        return {
            success: false,
            message: error.response.data.message,
        };
    }
}

