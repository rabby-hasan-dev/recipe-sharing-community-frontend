import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  followUser,
  unFollowUser,
} from "../services/SocialConectivity/followers";

interface CreateFollowResponse {
  message: string;
  success: boolean;
}

export const useFollowUser = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateFollowResponse, Error, string>({
    mutationKey: ["CREATE_VOTE"],
    mutationFn: async (followUserId) => await followUser(followUserId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
    },
  });
};

export const useUnFollowUser = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateFollowResponse, Error, string>({
    mutationKey: ["CREATE_VOTE"],
    mutationFn: async (unfollowUserId) => await unFollowUser(unfollowUserId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
    },
  });
};
