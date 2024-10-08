'use client'

import RecipeTable from '@/src/components/modules/Dashboard/Admin/RecipeTable';
import Loading from '@/src/components/UI/Loading';
import { useGetAllRecipeByAdmin } from '@/src/hooks/adminHooks';


const page = () => {
    const { data: recipes, isPending, isSuccess } = useGetAllRecipeByAdmin();

    return (
        <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
            {/* Page Title */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                    Recipe Management
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    View and manage all submitted recipes on the platform
                </p>
            </div>

            {/* Recipe Table or Loading Indicator */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
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