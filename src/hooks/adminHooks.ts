import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ChangeUserStatus, CreateAdmin, DelteSingleUserByAdmin, GetAllPrimiumUser, getAllRecipeByAdmin, GetAllUserByAdmin, PublishRecipe } from "../services/Admin"
import { FieldValues } from "react-hook-form"

type ChangeUserStatusMutation = {
    userId: string;
    status: FieldValues;
}


export const useGetAllUser = (page: number) => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_USERS"],
        queryFn: async () => await GetAllUserByAdmin(page),


    })
}

export const useGetAllRecipeByAdmin = (page: number) => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_AllRECIPE"],
        queryFn: async () => await getAllRecipeByAdmin(page),


    })
}


export const useGetAllPremiumUser = () => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_PRIMIUM_USERS"],
        queryFn: async () => await GetAllPrimiumUser(),

    })
}


export const useChangeUserStatus = () => {
    const queryClient = useQueryClient();

    return useMutation<any, Error, ChangeUserStatusMutation>({
        mutationKey: ["USER_STATUS"],
        mutationFn: async ({ userId, status }) => await ChangeUserStatus(userId, status),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
        },
    })

}

export const useCreateAdmin = () => {
    const queryClient = useQueryClient();

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["CREATE_ADMIN"],
        mutationFn: async (adminData) => await CreateAdmin(adminData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
        },

    })

}
export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation<any, Error, string>({
        mutationKey: ["DELETE_USER"],
        mutationFn: async (userId) => await DelteSingleUserByAdmin(userId),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
        },

    })

}


export const usePublishRecipe = () => {
    const queryClient = useQueryClient();

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["RECIPE_PUBLISH"],
        mutationFn: async (recipeData) => await PublishRecipe(recipeData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_RECIPE"] });
        },

    })

}