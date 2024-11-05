
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { IRecipe } from "../types/recipe.types";
import { useSearch } from "../context/searchState";
import envConfig from "../config/envConfig";

import { isPreemium } from "./preemiumUserHook";
import { useUser } from "../context/cureentUser";

const getAuthToken = () => {
  return Cookies.get("accessToken");
};

const axiosClient = axios.create({
  baseURL: envConfig.baseApi,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useRecipeFeed = () => {
  const { user } = useUser();
  const [items, setItems] = useState<IRecipe[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { selectedSort } = useSearch();
  const [selectedFeed, setSelectedFeed] = useState<string>("");

  const router = useRouter();

  const fetchData = async (reset = false) => {
    if (loading) return;

    if (reset) {
      setItems([]);
      setPage(1);
      setHasMore(true);
    }

    setLoading(true);
    try {
      const token = getAuthToken();
      if (token) {
        axiosClient.defaults.headers["Authorization"] = token;
      }

      const endpoint = selectedFeed === "premium" ? "/feed/premium" : "/feed";
      const response = await axiosClient.get(endpoint, {
        params: { page: reset ? 1 : page, sort: selectedSort },
      });

      const feedData = response?.data;

      if (feedData?.data) {
        setItems((prevItems) =>
          reset ? feedData?.data : [...prevItems, ...feedData.data]
        );
        // feedData?.meta?.total > 0
        setHasMore(feedData?.data?.length > 0);
        if (feedData?.data?.length > 0 && !reset) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      toast.error("Error loading feed data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(true); // Reset data whenever selectedFeed or selectedSort changes
  }, [selectedFeed, selectedSort]);

  const handleSelectFeed = async (feedType: string) => {
    if (feedType === "premium" && !(await isPreemium(user?.userId as string))) {
      toast.error(
        "You are not a Premium Member. Please get a Premium Membership."
      );
      router.push("/user/profile/my-recipes");
      return;
    }
    setSelectedFeed(feedType);
  };

  return { items, hasMore, loading, fetchData, selectedFeed, handleSelectFeed };
};


