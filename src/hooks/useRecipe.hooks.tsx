import { useState, useEffect } from "react";

import { IRecipe } from "../types/recipe.types";
import { useSearch } from "../context/searchState";
import Cookies from "js-cookie";
import axios from "axios";
import envConfig from "../config/envConfig";
import { toast } from "sonner";
import { isPreemium } from "./preemiumUserHook";
import { useRouter } from "next/navigation";
import { useUnivarsalRecipe } from "./receipeHooks";

interface UseRecipeFeedProps {
    user: { userId: string | undefined }; // Adjust this type according to your user object
    defaultFeedType?: string; // Optional default feed type
}


const getAuthToken = () => {
    return Cookies.get('accessToken'); // Assuming the token is stored as 'authToken' in cookies
};

// Create a new Axios instance for client-side requests
const axiosClient = axios.create({
    baseURL: envConfig.baseApi,  // Set your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});





export const useRecipeFeed = ({ user }: UseRecipeFeedProps) => {
    const [items, setItems] = useState<IRecipe[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const { selectedSort, searchQuery } = useSearch();
    const [selectedFeed, setSelectedFeed] = useState<'premium' | 'freemium' | ''>('');

    const router = useRouter();


    const fetchData = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const token = getAuthToken();
            if (token) {
                axiosClient.defaults.headers["Authorization"] = token;
            }

            const endpoint = selectedFeed === "premium" ? "/feed/premium" : "/feed";
            const response = await axiosClient.get(endpoint, {
                params: { page, sort: selectedSort },
            });

            const feedData = response?.data;
            if (feedData?.data) {
                setItems((prevItems) => [...prevItems, ...feedData.data]);
                setHasMore(feedData.data.length > 0);
                setPage((prevPage) => prevPage + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setItems([]);
        setPage(1);
        setHasMore(true);
        // if (searchQuery !== undefined) {
        //     fetchData();  // Fetch data with new search query
        // }
        fetchData();
    }, [searchQuery, selectedSort, selectedFeed]);

    const handleSelectFeed = async (feedType: string) => {
        if (feedType === "premium" && !(await isPreemium(user?.userId))) {
            toast.error("You are not a Premium Member. Please get a Premium Membership.");
            router.push("/user/profile/my-recipes");
            return;
        }
        setSelectedFeed(feedType);
    };

    return { items, hasMore, loading, fetchData, selectedFeed, handleSelectFeed };
};

