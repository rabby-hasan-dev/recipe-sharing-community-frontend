import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CreateRecipe, DeleteRecipe, getAllRecipe, getAllRecipeByAuthor, getAllRecipeBySearch, getSpecificRecipe, UpdateRecipe } from "../services/Recipe"





interface MutationVariables {
    recipeId: string;
    recipeData: FormData;
}


interface CreateRecipeResponse {
    message: string;
    success: boolean;
}



export const useCreateRecipe = () => {
    const queryClient = useQueryClient();
    return useMutation<CreateRecipeResponse, Error, FormData>({
        mutationKey: ["CREATE_RECIPE"],
        mutationFn: async (recipeData) => await CreateRecipe(recipeData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_RECIPE"] });
        },

    });
};

export const useUpdateRecipe = () => {
    const queryClient = useQueryClient();
    return useMutation<CreateRecipeResponse, Error, MutationVariables>({
        mutationKey: ["UPDATE_RECIPE"],
        mutationFn: async ({ recipeId, recipeData }) => await UpdateRecipe(recipeId, recipeData),

        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["GET_RECIPE"] });
        },
    });
};


export const useDeleteRecipe = () => {
    return useMutation<CreateRecipeResponse, Error, string>({
        mutationKey: ["UPDATE_RECIPE"],
        mutationFn: async (recipeId) => await DeleteRecipe(recipeId),
    });
};





export const useGetRecipe = () => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_RECIPE"],
        queryFn: async () => await getAllRecipe(),

    })
}

export const useGetAllRecipeBySearch = ({ searchTerm }: { searchTerm: string }) => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_RECIPE"],
        queryFn: async () => await getAllRecipeBySearch({ searchTerm }),

    })
}

export const useGetSingleRecipe = (recipeId: string) => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_SINGLE_RECIPE"],
        queryFn: async () => await getSpecificRecipe(recipeId),

    })
}


export const useGetAllRecipeByAuthor = (recipeId: string) => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_All_RECIPE_BY_RECIPE"],
        queryFn: async () => await getAllRecipeByAuthor(recipeId),

    })
}