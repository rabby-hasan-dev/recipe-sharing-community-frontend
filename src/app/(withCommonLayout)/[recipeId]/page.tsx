import RecipeComment from '@/src/components/modules/Recipe/RecipeComment';
import Container from '@/src/components/UI/Container';
import { geSingleRecipe } from '@/src/services/Recipe';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';

const RecipeDetailPage = async ({ params }: { params: any }) => {
    const { data: recipe } = await geSingleRecipe(params.recipeId)
    console.log(recipe);

    return (
        <Container>
            <Card className="mb-6 shadow-lg">
                <CardHeader>
                    <h2 className="text-2xl font-bold">{recipe?.title}</h2>
                </CardHeader>
                <CardBody>
                    <Image
                        src={recipe?.image}
                        alt={recipe?.title}
                        width={1200}
                        height={600}
                        className='w-full h-full object-cover mb-4 rounded-lg'
                    />
                    <p className=" mb-4">{recipe?.description}</p>
                    <h3 className="text-xl font-semibold">Ingredients:</h3>
                    <ul className="list-disc list-inside mb-4">
                        {recipe.ingredients.map((ingredient: string, index: number) => (
                            <li key={index} >{ingredient}</li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
            <RecipeComment></RecipeComment>
            <div>
                <h3 className="text-xl font-semibold mb-2">Rate this Recipe:</h3>

                rating components
            </div>
        </Container>
    );
};

export default RecipeDetailPage;
