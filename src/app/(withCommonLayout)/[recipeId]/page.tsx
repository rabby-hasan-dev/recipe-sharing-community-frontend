


import RecipeComment from '@/src/components/modules/Recipe/RecipeComment';
import { geSingleRecipe } from '@/src/services/Recipe';
import { Card, CardBody, CardHeader } from '@nextui-org/card';

const RecipeDetailPage = async ({ params }: { params: any }) => {
    const { data: recipe } = await geSingleRecipe(params?.recipeId)
    console.log(recipe);



    return (
        <div className="container mx-auto p-6">
            <Card className="mb-6 shadow-lg">
                <CardHeader>
                    <h2 className="text-2xl font-bold">{recipe.title}</h2>
                </CardHeader>
                <CardBody>
                    <img src={recipe?.image} alt={recipe.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
                    <p className="text-gray-700 mb-4">{recipe.description}</p>
                    <h3 className="text-xl font-semibold">Ingredients:</h3>
                    <ul className="list-disc list-inside mb-4">

                    </ul>
                    <h3 className="text-xl font-semibold">Instructions:</h3>
                    <p className="text-gray-600 mb-4">{recipe.instructions}</p>
                    {/* <h3 className="text-xl font-semibold">Cooking Timer: {timeLeft}s</h3> */}
                </CardBody>
            </Card>
            {/* recipe comments */}
            <RecipeComment></RecipeComment>


            <div>
                <h3 className="text-xl font-semibold mb-2">Rate this Recipe:</h3>
                {/* <Rating  /> */}
                rating
            </div>
        </div>
    );
};

export default RecipeDetailPage;
