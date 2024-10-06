import { getRecipe, getUserMatchAllRecipe } from '@/src/services/Recipe';
import { GetSingleUser } from '@/src/services/User';
import { IRecipe } from '@/src/types/recipe.types';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import React from 'react';


const ProfilePage = async ({ params }: { params: { userId: string } }) => {
    const { data: user } = await GetSingleUser(params.userId);
    const { username, profilePicture, bio, followerCount, followingCount } = user || {};
    const { data: recipes } = await getUserMatchAllRecipe(params.userId)

    return (
        <div className="container mx-auto p-6">
            {/* Profile Header */}
            <div className="flex items-center mb-6">
                <Avatar
                    src={profilePicture}
                    alt={username}
                    size="lg"
                    className="mr-4"
                />
                <div>
                    <h2 className="text-2xl font-semibold">{username}</h2>
                    <p className="text-gray-600">{bio}</p>
                    <div className="flex space-x-4 mt-2">
                        <Button >{followerCount} Followers</Button>
                        <Button >{followingCount} Following</Button>
                    </div>
                </div>
            </div>

            {/* Recipes Section */}
            <h3 className="text-xl font-semibold mb-4">My Recipes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.length > 0 ? (
                    recipes.map((recipe: IRecipe) => (
                        <Card isHoverable key={recipe?._id}>
                            <CardBody>
                                <img
                                    src={recipe?.image}
                                    alt={recipe?.title}
                                    className="w-full h-32 object-cover rounded-t-lg"
                                />
                                <h5 className="mt-2 font-semibold">{recipe?.title}</h5>
                                <p className="">{recipe?.description}</p>
                            </CardBody>
                            <CardFooter>
                                <Button color="default" className="w-full">
                                    View Recipe
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <p>No recipes found. Start adding some!</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
