'use client'

import RecipeTable from '@/src/components/modules/Dashboard/Admin/RecipeTable';
import Loading from '@/src/components/UI/Loading';
import { useGetRecipe } from '@/src/hooks/receipeHooks';
import React from 'react';

const page = () => {
    const { data: recipes, isPending, isSuccess } = useGetRecipe();
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Page Title */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">
                    Recipe Management
                </h1>
                <p className="text-gray-600 mt-2">
                    View and manage all submitted recipes on the platform
                </p>
            </div>

            {/* Recipe Table or Loading Indicator */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                {isPending ? (
                    <div className="flex justify-center items-center h-64">
                        <Loading />
                    </div>
                ) : isSuccess ? (
                    <RecipeTable recipes={recipes?.data} />
                ) : (
                    <div className="text-center text-red-500">
                        <p>Failed to load recipes. Please try again later.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;