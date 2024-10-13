import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { CheckSubscriptions, GetAllSubscriber, PurcaseSubscriptions } from "../services/Subscriptions";






interface SubscriptionData {
    payment_url: string;
}

interface SubscriptionResponse {
    data: SubscriptionData;
    success: boolean;
    message: string;
}






export const usePurcaseSubscriptions = () => {
    return useMutation<SubscriptionResponse, Error, FieldValues>({
        mutationKey: ["PURCASE_SUBSCRIPTIONS"],
        mutationFn: async (subcriptionData) => await PurcaseSubscriptions(subcriptionData),

    });
};

export const useCheckSubscriptions = () => {

    return useQuery({
        queryKey: ["SUBSCRIPTIONS_CHECK"],
        queryFn: async () => await CheckSubscriptions(),

    })
}
export const useGetAllSubscriptions = () => {

    return useQuery({
        queryKey: ["GET_SUBSCRIPTIONS"],
        queryFn: async () => await GetAllSubscriber(),

    })
}