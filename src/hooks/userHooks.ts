import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { GetMe, GetMeAnUpdate, GetSingleUser } from "../services/User"



export const useGetSingleUser = (userId: string) => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_USERS"],
        queryFn: async () => await GetSingleUser(userId),

    })
}

export const useGetMe = () => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_ME"],
        queryFn: async () => await GetMe(),

    })
}


export const useGetMeAnUpdate = () => {
    const queryClient = useQueryClient();
    return useMutation<any, Error, FormData>({
        mutationKey: ["USER_PROFILE_UPDATE"],
        mutationFn: async (meUpdateData) => {
            return await GetMeAnUpdate(meUpdateData)
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
        },

    })

}
