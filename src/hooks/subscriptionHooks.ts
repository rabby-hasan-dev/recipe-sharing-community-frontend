import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

import {
  CheckSubscriptions,
  GetAllSubscriber,
  PurcaseSubscriptions,
} from "../services/Subscriptions";

interface SubscriptionData {
  payment_url: string;
}

interface SubscriptionResponse {
  data: SubscriptionData;
  success: boolean;
  message: string;
}

export const usePurcaseSubscriptions = () => {
  const queryClient = useQueryClient();

  return useMutation<SubscriptionResponse, Error, FieldValues>({
    mutationKey: ["PURCASE_SUBSCRIPTIONS"],
    mutationFn: async (subcriptionData) =>
      await PurcaseSubscriptions(subcriptionData),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["GET_SUBSCRIPTIONS"] });
    },
  });
};

export const useCheckSubscriptions = () => {
  return useQuery({
    queryKey: ["SUBSCRIPTIONS_CHECK"],
    queryFn: async () => await CheckSubscriptions(),
  });
};
export const useGetAllSubscriptions = () => {
  return useQuery({
    queryKey: ["GET_SUBSCRIPTIONS"],
    queryFn: async () => await GetAllSubscriber(),
  });
};
