"use client";
import { useInfiniteScroll } from "@/src/hooks/useInfiniteScroll";
import { IRecipe } from "@/src/types/recipe.types";
import RecipeCard from "./RecipeCard";
import { Spinner } from "@nextui-org/spinner";

interface RecipeFeedProps {
    initialData: IRecipe[];
}

export default function RecipeFeed({ initialData }: RecipeFeedProps) {
    // useInfiniteScroll only runs on the client
    const { recipes, loadMore, hasMore } = useInfiniteScroll(initialData);

    return (
        <div className="max-w-4xl mx-auto ">

            <div className="space-y-6">
                {recipes.map((recipe: IRecipe) => (
                    <RecipeCard key={recipe?._id} recipe={recipe} />
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center my-10">
                    <button
                        onClick={loadMore}
                    >
                        <Spinner />
                    </button>
                </div>
            )}
        </div>
    );
}
