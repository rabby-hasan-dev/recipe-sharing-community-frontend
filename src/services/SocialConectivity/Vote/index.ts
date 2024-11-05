"use server";

import { FieldValues } from "react-hook-form";

import axiosInstance from "@/src/lib/AxiosInstance";

export const CreateVotes = async (recipeId: string, vote: FieldValues) => {
  try {
    const { data } = await axiosInstance.put(
      `/social-conectivity/${recipeId}/votes`,
      vote,
    );

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
