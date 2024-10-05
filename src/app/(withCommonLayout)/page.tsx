
import RecipeCard from "@/src/components/modules/Recipe/RecipeCard";
import Container from "@/src/components/UI/Container";
import { getRecipe } from "@/src/services/Recipe";
import { IRecipe } from "@/src/types/recipe.types";



export default async function Home() {
    const { data: recipes } = await getRecipe();

    return (
        <Container>
            <div className="grid grid-cols-2 gap-4 items-center   mx-auto">
                {
                    recipes.map((item: IRecipe) => <RecipeCard key={item?._id} recipe={item}></RecipeCard>)
                }

            </div>
        </Container>
    );
}

[]