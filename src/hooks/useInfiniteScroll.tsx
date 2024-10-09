
"use client";

import { useState, useEffect } from 'react';
import { IRecipe } from '../types/recipe.types';
import envConfig from '../config/envConfig';
import { toast } from 'sonner';

export function useInfiniteScroll(initialData: any, selectedFeed: string) {
    const [recipes, setRecipes] = useState<IRecipe[]>(initialData || []);
    const [page, setPage] = useState(2); // Start from page 2
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false); // Prevent multiple calls

    // Reset state when feed type changes
    useEffect(() => {
        setRecipes(initialData || []);
        setPage(2); // Reset to page 2 for the new feed
        setHasMore(true); // Reset hasMore when switching feeds
    }, [selectedFeed, initialData]);

    const loadMore = async () => {
        if (loading || !hasMore) return; // Prevent further calls if already loading or no more data
        setLoading(true); // Set loading to true to prevent duplicate calls

        // Determine the correct API endpoint based on the selected feed
        const apiUrl =
            selectedFeed === 'premium'
                ? `${envConfig.baseApi}/feed/premium?page=${page}`
                : `${envConfig.baseApi}/feed?page=${page}`; // Default to public feed

        try {
            const res = await fetch(apiUrl);
            const data = await res.json();

            const newRecipes = Array.isArray(data?.data) ? data?.data : [];

            if (newRecipes.length === 0) {
                toast.error("No more recipes!");
                setHasMore(false); // No more recipes to load
            } else {
                setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);
                setPage((prevPage) => prevPage + 1); // Increment page number after loading
            }
        } catch (error: any) {
            toast.error(error.message || "Error fetching recipes:");
        } finally {
            setLoading(false); // Reset loading state after fetching
        }
    };

    // Set up automatic scroll fetching
    useEffect(() => {
        const handleScroll = () => {
            const bottom =
                Math.ceil(window.innerHeight + window.scrollY) >=
                document.documentElement.scrollHeight - 1; // -1 to ensure accuracy

            if (bottom) {
                loadMore(); // Load more when scrolling to the bottom
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMore]); // Depend on loadMore to avoid stale closure

    return { recipes, loadMore, hasMore };
}
