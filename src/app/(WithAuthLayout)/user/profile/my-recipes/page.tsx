"use client";

import EditableRecipeCard from "@/src/components/modules/Recipe/EditableRecipeCard";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/context/cureentUser";
import { useGetAllRecipeByAuthor } from "@/src/hooks/receipeHooks";
import { IRecipe } from "@/src/types/recipe.types";
import { Spinner } from "@nextui-org/spinner";

const MyRecipesPage = () => {
    const { user } = useUser();
    const userId = user?.userId;

    if (!userId) {
        return <Spinner></Spinner>;
    }
    const { data, isPending, isSuccess } = useGetAllRecipeByAuthor(
        userId ? userId : "",
    );

    const recipes: IRecipe[] = data?.data || [];



    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">My Recipes</h3>
            <div className="space-y-5">
                {isPending && <Spinner></Spinner>}
                {!isPending && isSuccess && recipes?.length > 0 ? (
                    recipes.map((recipe: IRecipe) => (
                        <EditableRecipeCard key={recipe._id} recipe={recipe} />
                    ))
                ) : (
                    <p className="text-center text-gray-600">
                        No recipes found. Start adding some!
                    </p>
                )}
            </div>
        </div>
    );
};

export default MyRecipesPage;
