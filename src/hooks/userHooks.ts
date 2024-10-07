import { useMutation, useQuery } from "@tanstack/react-query"
import { GetMe, GetMeAnUpdate, GetSingleUser } from "../services/User"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"



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

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_RAGISTRATION"],
        mutationFn: async (meUpdateData) => await GetMeAnUpdate(meUpdateData),
        onSuccess: () => {
            toast.success('Update My Profile  Successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}
