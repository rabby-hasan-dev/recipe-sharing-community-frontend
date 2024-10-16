
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { CreateVotes } from "../services/SocialConectivity/Vote";





interface MutationVariables {
    id: string;
    voteData: FieldValues;
}



interface CreateCommentResponse {
    message: string;
    success: boolean;
}



export const useCreateVote = () => {
    return useMutation<CreateCommentResponse, Error, MutationVariables>({
        mutationKey: ["CREATE_VOTE"],
        mutationFn: async ({ id, voteData }) => await CreateVotes(id, voteData),

    });
};
