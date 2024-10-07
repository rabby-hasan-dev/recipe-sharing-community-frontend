import axiosInstance from "@/src/lib/AxiosInstance";




export const followUser = async (followUserId: string,) => {
    try {
        const { data } = await axiosInstance.post(`/follow/follow/${followUserId}`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}


export const unFollowUser = async (unFollowUserId: string,) => {
    try {
        const { data } = await axiosInstance.post(`/follow/unfollow/${unFollowUserId}`);
        return data;
    } catch (error: any) {

        throw new Error(error)
    }
}

