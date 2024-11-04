
import RecipeComment from '@/src/components/modules/Recipe/RecipeComment';
import RecipeRating from '@/src/components/modules/Recipe/RecipeRatings';
import Container from '@/src/components/UI/Container';
import ImagePreview from '@/src/components/UI/ImagePreview';
import { cureentUserChecker } from '@/src/services/AuthService';
import { getSpecificRecipe } from '@/src/services/Recipe';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { redirect } from 'next/navigation';


const RecipeDetailPage = async ({ params }: { params: { recipeId: string } }) => {

    const token = await cureentUserChecker();

    if (!token) {
        return (redirect('/login'));
    }

    const { data: recipe } = await getSpecificRecipe(params?.recipeId);



    return (
        <Container>
            {/* Recipe Card */}


            <Card className="shadow-lg border border-gray-300 rounded-lg overflow-hidden dark:border-gray-700 dark:bg-gray-800">
                {/* Card Header */}
                <CardHeader className="bg-gray-100 p-6 dark:bg-gray-900">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        {recipe?.title}
                    </h2>
                </CardHeader>

                {/* Card Body */}
                <CardBody className="p-6 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                    {/* Recipe Images */}
                    <ImagePreview images={recipe?.images} />
                    {/* Recipe Description */}
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
                        {recipe?.description}
                    </p>

                    {/* Ingredients Section */}
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                        Ingredients:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        {recipe?.ingredients.map((ingredient: string, index: number) => (
                            <li key={index} className="text-lg text-gray-700 dark:text-gray-300">
                                {ingredient}
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                        Time: <span className='ml-2'>{recipe?.cookingTime}</span>
                    </h3>
                    {/* Recipe Rating */}
                    <div className="mt-8">
                        <RecipeRating recipe={recipe} />
                    </div>
                    {/* Recipe Comments */}
                    <div className="mt-8">
                        <RecipeComment recipeId={recipe?._id} />
                    </div>
                </CardBody>
            </Card>

        </Container>


    );
};

export default RecipeDetailPage;
