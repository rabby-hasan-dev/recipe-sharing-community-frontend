import { useMutation } from "@tanstack/react-query"

import { FieldValues } from "react-hook-form"
import { toast } from "sonner"
import { loginUser, registerUser } from "../services/AuthService"


export const useUserRagistration = () => {

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_RAGISTRATION"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () => {
            toast.success('User Registration Successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}

export const useUserLogin = () => {

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_RAGISTRATION"],
        mutationFn: async (userData) => await loginUser(userData),
        onSuccess: () => {
            toast.success('User Login Successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}