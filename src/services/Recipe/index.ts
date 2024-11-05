"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllRecipeByAuthor = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/recipes/author/${userId}`);

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const getAllRecipe = async () => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };
  try {
    const { data } = await axiosInstance.get(`/recipes`, fetchOptions);

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const getAllRecipeBySearch = async ({
  searchTerm,
}: {
  searchTerm: string;
}) => {
  try {
    const { data } = await axiosInstance.get(`/recipes`, {
      params: {
        searchTerm,
      },
    });

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const geSingleRecipe = async (recipeId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  try {
    const { data } = await axiosInstance.get(
      `/recipes/${recipeId}`,
      fetchOptions,
    );

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const getSpecificRecipe = async (recipeId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-cache",
  };
  const res = await fetch(
    `${envConfig.baseApi}/recipes/${recipeId}`,
    fetchOptions,
  );

  return res.json();
};

export const CreateRecipe = async (recipeData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/recipes", recipeData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("recipes");

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const UpdateRecipe = async (
  recipeId: string,
  recipeData: FieldValues,
) => {
  try {
    const { data } = await axiosInstance.put(
      `/recipes/${recipeId}`,
      recipeData,
    );

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const DeleteRecipe = async (recipeId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/recipes/${recipeId}`);

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
