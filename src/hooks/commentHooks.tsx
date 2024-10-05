
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { CreateComment, deleteComments, EditComment, GetComments } from "../services/SocialConectivity/comment";
import { FieldValues } from "react-hook-form";

// Define types for the parameters and return data

interface MutationVariables {
    id: string;
    commentData: FieldValues;
}
interface MutationVariablesEdit {
    id: string;
    editCommentData: FieldValues;
}
interface MutationVariablesDelete {
    recipeId: string
    commentId: string
}

interface CreateCommentResponse {
    message: string;
    success: boolean;
}



export const useCreateComment = () => {
    return useMutation<CreateCommentResponse, Error, MutationVariables>({
        mutationKey: ["CREATE_COMMENT"],
        mutationFn: async ({ id, commentData }) => await CreateComment(id, commentData),
        onSuccess: () => {
            toast.success("Comment created successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};


export const useGetComments = (recipeId: string) => {
    return useQuery({
        queryKey: ["GET_COMMENT"],
        queryFn: async () => await GetComments(recipeId),


    });
};

export const useEditComment = () => {
    return useMutation<CreateCommentResponse, Error, MutationVariablesEdit>({
        mutationKey: ["EDIT_COMMENT"],
        mutationFn: async ({ id, editCommentData }) => await EditComment(id, editCommentData),
        onSuccess: () => {
            toast.success("Comment edit successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};


export const useDeleteComments = () => {
    return useMutation<CreateCommentResponse, Error, MutationVariablesDelete>({
        mutationKey: ["DELETE_COMMENT"],
        mutationFn: async ({ recipeId, commentId }) => await deleteComments(recipeId, commentId),
        onSuccess: () => {
            toast.success("Comment Delete successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};


