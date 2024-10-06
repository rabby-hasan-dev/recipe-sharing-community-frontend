"use client"

import { useState, useEffect } from 'react';
import { IRecipe } from '../types/recipe.types';
import envConfig from '../config/envConfig';

export function useInfiniteScroll(initialData: any) {
    const [recipes, setRecipes] = useState<IRecipe[] | []>(initialData || []);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Load more recipes when the "Load More" button is clicked
    const loadMore = async () => {
        const nextPage = page + 1;
        const res = await fetch(`${envConfig.baseApi}/recipes?page=${nextPage}`);
        const data = await res.json();

        const newRecipes = Array.isArray(data?.recipes) ? data.recipes : [];

        if (newRecipes?.length === 0) {
            setHasMore(false);
        } else {
            setRecipes(prevRecipes => [...prevRecipes, ...data?.recipes]);
            setPage(nextPage);
        }
    };

    // Optional: Set up automatic scroll fetching (if not using a button)
    useEffect(() => {
        const handleScroll = () => {
            const bottom =
                Math.ceil(window?.innerHeight + window?.scrollY) >= document?.documentElement?.scrollHeight;

            if (bottom && hasMore) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore, page]);

    return { recipes, loadMore, hasMore };
}
