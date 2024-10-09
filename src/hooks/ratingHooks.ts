
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { CreateRating, GetRating } from "../services/SocialConectivity/Rating";



interface MutationVariables {
    recipeId: string;
    ratingData: FieldValues;
}


interface CreateCommentResponse {
    message: string;
    success: boolean;
}



export const useCreateRating = () => {
    return useMutation<CreateCommentResponse, Error, MutationVariables>({
        mutationKey: ["CREATE_RATING"],
        mutationFn: async ({ recipeId, ratingData }) => await CreateRating(recipeId, ratingData),
        onSuccess: () => {
            toast.success("Rating successfully");
        },
        onError: (error) => {

            toast.error(error.message);
        },
    });
};


export const useGetRatings = (recipeId: string) => {
    return useQuery({
        queryKey: ["GET_COMMENT"],
        queryFn: async () => await GetRating(recipeId),


    });
};