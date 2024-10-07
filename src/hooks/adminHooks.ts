import { useMutation, useQuery } from "@tanstack/react-query"
import { ChangeUserStatus, CreateAdmin, DelteSingleUserByAdmin, GetAllPrimiumUser, GetAllUserByAdmin, PublishRecipe } from "../services/Admin"
import { toast } from "sonner"
import { FieldValues } from "react-hook-form"

type ChangeUserStatusMutation = {
    userId: string;
    status: FieldValues;
}


export const useGetAllUser = () => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_USERS"],
        queryFn: async () => await GetAllUserByAdmin(),


    })
}


export const useGetAllPremiumUser = () => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_PRIMIUM_USERS"],
        queryFn: async () => await GetAllPrimiumUser(),

    })
}


export const useChangeUserStatus = () => {

    return useMutation<any, Error, ChangeUserStatusMutation>({
        mutationKey: ["USER_STATUS"],
        mutationFn: async ({ userId, status }) => await ChangeUserStatus(userId, status),
        onSuccess: () => {
            toast.success(' Change Status User  Successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}

export const useCreateAdmin = () => {

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["CREATE_ADMIN"],
        mutationFn: async (adminData) => await CreateAdmin(adminData),
        onSuccess: () => {
            toast.success('Create Admin Successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}
export const useDeleteUser = () => {

    return useMutation<any, Error, string>({
        mutationKey: ["DELETE_USER"],
        mutationFn: async (userId) => await DelteSingleUserByAdmin(userId),
        onSuccess: () => {
            toast.success('User Delete Successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}


export const usePublishRecipe = () => {

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_RAGISTRATION"],
        mutationFn: async (recipeData) => await PublishRecipe(recipeData),
        onSuccess: () => {
            toast.success('Publish Recipe Successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}