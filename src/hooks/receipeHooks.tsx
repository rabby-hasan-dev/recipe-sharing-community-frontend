import { useMutation, useQuery } from "@tanstack/react-query"
import { CreateRecipe, DeleteRecipe, getRecipe, UpdateRecipe } from "../services/Recipe"
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";



interface MutationVariables {
    recipeId: string;
    recipeData: FieldValues;
}


interface CreateRecipeResponse {
    message: string;
    success: boolean;
}



export const useCreateRecipe = () => {
    return useMutation<CreateRecipeResponse, Error, FieldValues>({
        mutationKey: ["CREATE_RECIPE"],
        mutationFn: async (recipeData) => await CreateRecipe(recipeData),
        onSuccess: () => {
            toast.success(" created Recipe  successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export const useUpdateRecipe = () => {
    return useMutation<CreateRecipeResponse, Error, MutationVariables>({
        mutationKey: ["UPDATE_RECIPE"],
        mutationFn: async ({ recipeId, recipeData }) => await UpdateRecipe(recipeId, recipeData),
        onSuccess: () => {
            toast.success(" Update Recipe  successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};


export const useDeleteRecipe = () => {
    return useMutation<CreateRecipeResponse, Error, string>({
        mutationKey: ["UPDATE_RECIPE"],
        mutationFn: async (recipeId) => await DeleteRecipe(recipeId),
        onSuccess: () => {
            toast.success(" Delete Recipe  successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};





export const useGetRecipe = () => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_RECIPE"],
        queryFn: async () => await getRecipe(),

    })
}