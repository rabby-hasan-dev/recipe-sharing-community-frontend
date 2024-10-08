import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { CheckSubscriptions, GetAllSubscriber, PurcaseSubscriptions } from "../services/Subscriptions";



interface PurcaseSubscriptionsResponse {
    message: string;
    success: boolean;
}


export const usePurcaseSubscriptions = () => {
    return useMutation<PurcaseSubscriptionsResponse, Error, FieldValues>({
        mutationKey: ["PURCASE_SUBSCRIPTIONS"],
        mutationFn: async (subcriptionData) => await PurcaseSubscriptions(subcriptionData),
        onSuccess: () => {
            toast.success(" Membership Subscription successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
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