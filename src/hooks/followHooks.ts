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
        onSuccess: () => {
            toast.success("Follow User successfully");
        },
        onError: (error) => {

            toast.error(error.message);
        },
    });
};

export const useUnFollowUser = () => {
    return useMutation<CreateFollowResponse, Error, string>({
        mutationKey: ["CREATE_VOTE"],
        mutationFn: async (unfollowUserId) => await unFollowUser(unfollowUserId),
        onSuccess: () => {
            toast.success(" UnFollow User successfully");
        },
        onError: (error) => {

            toast.error(error.message);
        },
    });
};
