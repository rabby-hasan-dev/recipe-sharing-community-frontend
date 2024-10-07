
'use client'
import RecipeCard from '@/src/components/modules/Recipe/RecipeCard';
import { useGetRecipe } from '@/src/hooks/receipeHooks';
import { useGetMe } from '@/src/hooks/userHooks';
import { IRecipe } from '@/src/types/recipe.types';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

const UserDashboard = () => {
    const { data: user } = useGetMe();
    const { _id, username, profilePicture, bio, followerCount, followingCount } = user?.data || {};
    const { data } = useGetRecipe();
    const recipes = data?.data?.filter((recipe: IRecipe) => recipe?.author?._id === _id);


    return (
        <div className="container mx-auto p-6">
            {/* Profile Header */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center mb-6">
                <Avatar
                    src={profilePicture}
                    alt={username}
                    size="lg"
                    className="border-4 border-white shadow-lg"
                />
                <h2 className="text-3xl font-bold mt-4">{username}</h2>
                <p className="text-gray-500">{bio}</p>

                <div className="flex space-x-6 mt-4">
                    <div className="text-center">
                        <h3 className="font-semibold">{followerCount}</h3>
                        <p className="text-gray-600">Followers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold">{followingCount}</h3>
                        <p className="text-gray-600">Following</p>
                    </div>
                </div>
            </div>

            {/* Profile Navigation Bar */}
            <div className="bg-gray-100 rounded-lg shadow-md flex justify-center mb-6">
                <Button className="py-4 px-6 rounded-none">My Recipes</Button>
                <Button className="py-4 px-6 rounded-none">Followers</Button>
                <Button className="py-4 px-6 rounded-none">Following</Button>
                <Button className="py-4 px-6 rounded-none">Edit Profile</Button>
            </div>

            {/* Membership Section */}
            <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Become a Member</h3>
                <p className="mb-4">
                    Enjoy exclusive content and features by joining our membership!
                </p>
                <Button color="success" className="w-full">
                    Get Membership
                </Button>
            </div>
            {/* Create Recipe Section */}
            <div className="bg-green-50 p-4 rounded-lg shadow-md mb-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Create Your Own Recipe</h3>
                <p className="mb-4">
                    Share your culinary creativity by adding a new recipe to your collection.
                </p>
                <Link href="/create-recipe">
                    <Button color="primary" className="text-white w-full">
                        Create Recipe
                    </Button>
                </Link>
            </div>

            {/* Recipes Section */}
            <h3 className="text-2xl font-bold mb-4">My Recipes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes?.length > 0 ? (
                    recipes?.map((recipe: IRecipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))
                ) : (
                    <p className="text-center text-gray-600">No recipes found. Start adding some!</p>
                )}
            </div>
        </div>
    );
};

export default UserDashboard;
