"use client";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

import FollowUserButton from "@/src/components/modules/Profile/FollowUserButton";
import UnFollowUserButton from "@/src/components/modules/Profile/UnFollowUserButton";
import RecipeCard from "@/src/components/modules/Recipe/RecipeCard";
import { useUser } from "@/src/context/cureentUser";
import { useGetAllRecipeByAuthor } from "@/src/hooks/receipeHooks";
import { IRecipe } from "@/src/types/recipe.types";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
  const { user: cureentUser } = useUser();
  const router = useRouter();
  const { data, isPending, isSuccess } = useGetAllRecipeByAuthor(
    params?.userId as string,
  );
  const recipes: IRecipe[] = data?.data || [];

  // const { data: user, isFetching: isUserFetching, isSuccess: isUserSuccess, isError: isUserError } = useGetSingleUser(params?.userId);
  // const { _id, username, profilePicture, bio, followerCount, followingCount } = user?.data || {};

  const { _id, username, profilePicture, bio, followerCount, followingCount } =
    recipes[0]?.author || {};

  if (!cureentUser?.email) {
    router.push("/login");
  }

  return (
    <div className="container mx-auto p-6">
      {/* Profile Header */}
      <div className="relative bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-center items-center">
          <Avatar
            alt={username}
            className="border-4 border-white shadow-lg"
            size="lg"
            src={profilePicture}
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {username}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">{bio}</p>
          <div className="flex justify-center space-x-8 mt-4">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {followerCount}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Followers</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {followingCount}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Following</p>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <FollowUserButton followUserId={params?.userId} />
            <UnFollowUserButton unFollowUserId={params?.userId} />
            {/* <Button color="primary" className="py-2 px-6">Message</Button> */}
          </div>
        </div>
      </div>

      {/* Profile Navigation Bar */}
      <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-lg flex justify-center mb-8">
        <Button className="px-6 py-2 rounded-none text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
          Recipes
        </Button>
        <Button className="px-6 py-2 rounded-none text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
          Followers
        </Button>
        <Button className="px-6 py-2 rounded-none text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
          Following
        </Button>
        <Button className="px-6 py-2 rounded-none text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
          About
        </Button>
      </div>

      {/* Recipes Section */}
      <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
        Recipes
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {recipes?.length > 0 ? (
          recipes?.map((recipe: IRecipe) => <RecipeCard recipe={recipe} />)
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No recipes found. Start adding some!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
