"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

//  delete this next time just for ui concept
export const GetAllUser = async () => {
  try {
    const { data } = await axiosInstance.get(`/users`);

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const GetSingleUser = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/users/${userId}`);

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const GetMe = async () => {
  try {
    const { data } = await axiosInstance.get(`/users/me`);

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};

export const GetMeAnUpdate = async (meUpdateData: FormData) => {
  try {
    const { data } = await axiosInstance.put("/users/me", meUpdateData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
