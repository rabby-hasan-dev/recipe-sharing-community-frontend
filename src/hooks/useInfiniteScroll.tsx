"use client"

import { useState, useEffect } from 'react';
import { IRecipe } from '../types/recipe.types';
import envConfig from '../config/envConfig';
import { toast } from 'sonner';
export function useInfiniteScroll(initialData: any) {
    const [recipes, setRecipes] = useState<IRecipe[]>(initialData || []);
    const [page, setPage] = useState(2); // Start from page 1
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false); // New loading state to prevent multiple calls

    const loadMore = async () => {
        if (loading || !hasMore) return; // Prevent further calls if already loading or no more data
        setLoading(true); // Set loading to true to prevent duplicate calls
        try {
            const res = await fetch(`${envConfig.baseApi}/recipes?page=${page}`);
            const data = await res.json();

            const newRecipes = Array.isArray(data?.data) ? data?.data : [];

            if (newRecipes.length === 0) {
                toast.error("No more recipes!")
                setHasMore(false); // No more recipes to load
            } else {
                setRecipes(prevRecipes => [...prevRecipes, ...newRecipes]);
                setPage(prevPage => prevPage + 1); // Increment page number after loading
            }
        } catch (error: any) {
            toast.error(error.message || "Error fetching recipes:")
            // Optionally handle errors (e.g., setHasMore(false) or notify the user)
        } finally {
            setLoading(false); // Reset loading state after fetching
        }
    };

    // Set up automatic scroll fetching
    useEffect(() => {
        const handleScroll = () => {
            const bottom =
                Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 1; // -1 to ensure accuracy

            if (bottom) {
                loadMore(); // Load more when scrolling to the bottom
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMore]); // Depend on loadMore to avoid stale closure

    return { recipes, loadMore, hasMore };
}

