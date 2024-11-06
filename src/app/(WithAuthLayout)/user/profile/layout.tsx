"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ReactNode } from "react";

import { useGetMe } from "@/src/hooks/userHooks";
import MyProfile from "@/src/components/modules/Dashboard/User/MyProfile/MyProfile";
import CreateRecipeModal from "../../_components/module/modal/CreateRecipeModal";
import { useUser } from "@/src/context/cureentUser";

const UserDashboardLayout = ({ children }: { children: ReactNode }) => {
  const { data: user, isPending, isSuccess } = useGetMe();
  const { user: CurrentUser } = useUser();

  return (
    <>
      <div className="container mx-auto p-6">
        {/* Profile Header */}
        <MyProfile
          isPending={isPending}
          isSuccess={isSuccess}
          user={user?.data}
        />
        {/* Profile Navigation Bar */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex justify-center mb-6">
          <Link href="/user/profile/my-recipes">
            <Button className="py-4 px-6 rounded-none">My Recipes</Button>
          </Link>
          <Link href="#">
            <Button className="py-4 px-6 rounded-none">Followers</Button>
          </Link>
          <Link href="#">
            <Button className="py-4 px-6 rounded-none">Following</Button>
          </Link>
          <Link href="/user/profile/edit-profile">
            <Button className="py-4 px-6 rounded-none">Edit Profile</Button>
          </Link>
        </div>

        <div className="lg:flex justify-between gap-8">
          <div className="lg:w-1/2">
            {/* Bio Section */}
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Bio
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {user?.data?.bio || "No bio available."}
              </p>
            </div>
            {
              CurrentUser?.role === "admin" ? <>
                <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg shadow-md mb-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Find Premium Member
                  </h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Check who is joining our membership!
                  </p>
                  <Link href="/dashboard/subscriptions">
                    <Button className="w-full" color="success">
                      Find Premium Member
                    </Button>
                  </Link>
                </div>
              </> : <>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg shadow-md mb-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Become a Member
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Enjoy exclusive content and features by joining our membership!
                  </p>
                  <Link href="/membership">
                    <Button className="w-full" color="success">
                      Get Membership
                    </Button>
                  </Link>
                </div>

              </>
            }



            {/* Create Recipe Section */}
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg shadow-md mb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Create Your Own Recipe
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Share your culinary creativity by adding a new recipe to your
                collection.
              </p>
              <div className="text-white w-full bg-primary hover:bg-primary-dark cursor-pointer p-2 rounded-lg flex items-center justify-center"
              >
                <CreateRecipeModal /> <span className="ml-2">Create Recipe</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Info:
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-600 dark:text-gray-300">
                    Email:
                  </p>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {user?.data?.email}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-600 dark:text-gray-300">
                    Phone:
                  </p>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {user?.data?.phone}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-600 dark:text-gray-300">
                    Address:{" "}
                  </p>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {user?.data?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="lg:w-1/2">{children}</main>
        </div>
      </div>
    </>
  );
};

export default UserDashboardLayout;
