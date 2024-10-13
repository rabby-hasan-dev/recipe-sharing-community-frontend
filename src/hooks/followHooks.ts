import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { followUser, unFollowUser } from "../services/SocialConectivity/followers";



interface CreateFollowResponse {
    message: string;
    success: boolean;
}



export const useFollowUser = () => {
    return useMutation<CreateFollowResponse, Error, string>({
        mutationKey: ["CREATE_VOTE"],
        mutationFn: async (followUserId) => await followUser(followUserId),

    });
};

export const useUnFollowUser = () => {
    return useMutation<CreateFollowResponse, Error, string>({
        mutationKey: ["CREATE_VOTE"],
        mutationFn: async (unfollowUserId) => await unFollowUser(unfollowUserId),

    });
};
