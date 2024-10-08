import { useMutation } from "@tanstack/react-query"

import { FieldValues } from "react-hook-form"
import { toast } from "sonner"
import { changePassword, forgotPassword, loginUser, registerUser, resetPassword } from "../services/AuthService"


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

export const useForgotPassword = () => {

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["FORGOT_PASSWORD"],
        mutationFn: async (userData) => await forgotPassword(userData),
        onSuccess: () => {
            toast.success('Send Recovery token to user email Successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}
export const useResetPassword = () => {

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["RESET_PASSWORD"],
        mutationFn: async (userData) => await resetPassword(userData),
        onSuccess: () => {
            toast.success('Password Change  Successfully')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}

export const useChangePassword = () => {

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["CHANGE_PASSWORD"],
        mutationFn: async (userData) => await changePassword(userData),
        onSuccess: () => {
            toast.success('Password Change  Successfully')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

}