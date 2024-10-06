
import RecipeComment from '@/src/components/modules/Recipe/RecipeComment';
import Container from '@/src/components/UI/Container';
import { geSingleRecipe } from '@/src/services/Recipe';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';

const RecipeDetailPage = async ({ params }: { params: any }) => {
    const { data: recipe } = await geSingleRecipe(params.recipeId);
    console.log(recipe);

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
                <h3 className="text-xl font-semibold mb-4">Rate this Recipe:</h3>
                {/* Rating component goes here */}
                <div className="flex items-center">
                    <Button className="mr-2" color="primary">⭐</Button>
                    <Button className="mr-2" color="primary">⭐</Button>
                    <Button className="mr-2" color="primary">⭐</Button>
                    <Button className="mr-2" color="primary">⭐</Button>
                    <Button color="primary">⭐</Button>
                </div>
            </div>
        </Container>
    );
};

export default RecipeDetailPage;
