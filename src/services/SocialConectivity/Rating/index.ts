"use server";

import { FieldValues } from "react-hook-form";

import axiosInstance from "@/src/lib/AxiosInstance";

export const CreateRating = async (recipeId: string, rating: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      `/social-conectivity/${recipeId}/rating`,
      rating,
    );

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const GetRating = async (recipeId: string) => {
  try {
    const { data } = await axiosInstance.get(
      `/social-conectivity/${recipeId}/ratings`,
    );

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
