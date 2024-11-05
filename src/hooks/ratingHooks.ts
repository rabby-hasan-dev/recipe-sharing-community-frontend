import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  return useMutation<CreateCommentResponse, Error, MutationVariables>({
    mutationKey: ["CREATE_RATING"],
    mutationFn: async ({ recipeId, ratingData }) =>
      await CreateRating(recipeId, ratingData),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["GET_RATTING"] });
    },
  });
};

export const useGetRatings = (recipeId: string) => {
  return useQuery({
    queryKey: ["GET_RATTING"],
    queryFn: async () => await GetRating(recipeId),
  });
};
