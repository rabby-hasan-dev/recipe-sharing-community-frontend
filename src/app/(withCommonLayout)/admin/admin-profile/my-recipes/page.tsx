
"use client";
import RecipeCard from "@/src/components/modules/Recipe/RecipeCard";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/context/cureentUser";
import { useGetRecipe } from "@/src/hooks/receipeHooks";

import { IRecipe } from "@/src/types/recipe.types";

const MyRecipesPage = () => {
    const { user } = useUser();
    const { data, isPending, isSuccess } = useGetRecipe();
    const recipes = data?.data?.filter((recipe: IRecipe) => recipe?.author?._id === user?.userId) || [];

    return (
        <div>
            {isPending && <Loading />}
            <h3 className="text-2xl font-bold mb-4">My Recipes</h3>
            <div>
                {!isPending && isSuccess && recipes?.length > 0 ? (
                    recipes.map((recipe: IRecipe) => <RecipeCard key={recipe._id} recipe={recipe} />)
                ) : (
                    <p className="text-center text-gray-600">No recipes found. Start adding some!</p>
                )}
            </div>
        </div>
    );
};

export default MyRecipesPage;
