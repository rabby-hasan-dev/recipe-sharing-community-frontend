
import RecipeComment from '@/src/components/modules/Recipe/RecipeComment';
import RecipeRating from '@/src/components/modules/Recipe/RecipeRatings';
import Container from '@/src/components/UI/Container';
import { geSingleRecipe } from '@/src/services/Recipe';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';

const RecipeDetailPage = async ({ params }: { params: any }) => {
    const { data: recipe } = await geSingleRecipe(params?.recipeId);

    return (
        <Container>
            <Card className="mb-6 shadow-lg border border-gray-200 rounded-lg">
                <CardHeader className="bg-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800">{recipe?.title}</h2>
                </CardHeader>
                <CardBody>
                    <Image
                        src={recipe?.image}
                        alt={recipe?.title}
                        width={1200}
                        height={600}
                        className='w-full h-64 object-cover mb-4 rounded-lg'
                    />
                    <p className="mb-4 ">{recipe?.description}</p>
                    <h3 className="text-2xl font-semibold mb-2">Ingredients:</h3>
                    <ul className="list-disc list-inside mb-4">
                        {recipe?.ingredients.map((ingredient: string, index: number) => (
                            <li key={index} className="">{ingredient}</li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
            <RecipeComment recipeId={recipe?._id} />
            <div className="mt-8">
                <RecipeRating recipe={recipe} />

            </div>
        </Container>
    );
};

export default RecipeDetailPage;
