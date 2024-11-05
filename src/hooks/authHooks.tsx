import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

import {
  changePassword,
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
} from "../services/AuthService";

export const useUserRagistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_RAGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_RAGISTRATION"],
    mutationFn: async (userData) => await loginUser(userData),
  });
};

export const useForgotPassword = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["FORGOT_PASSWORD"],
    mutationFn: async (userData) => await forgotPassword(userData),
  });
};

export const useResetPassword = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["RESET_PASSWORD"],
    mutationFn: async (userData) => await resetPassword(userData),
  });
};

export const useChangePassword = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CHANGE_PASSWORD"],
    mutationFn: async (userData) => await changePassword(userData),
  });
};
