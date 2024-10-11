"use client"
import MyProfile from "@/src/components/modules/Dashboard/User/MyProfile/MyProfile";
import { useGetMe } from "@/src/hooks/userHooks";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import Link from "next/link";
import { ReactNode } from "react";


const UserDashboardLayout = ({ children, }: { children: ReactNode }) => {
    const { data: user, isPending, isSuccess } = useGetMe();

    return (
        <>
            {
                isPending && !isSuccess && < Spinner />
            }
            <div className="container mx-auto p-6">
                {/* Profile Header */}
                <MyProfile user={user?.data} isPending={isPending} isSuccess={isSuccess} />

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
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bio</h3>
                            <p className="text-gray-700 dark:text-gray-300">{user?.data?.bio || 'No bio available.'}</p>
                        </div>

                        {/* Membership Section */}
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg shadow-md mb-6 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Become a Member</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Enjoy exclusive content and features by joining our membership!
                            </p>
                            <Link href="/user/membership">
                                <Button color="success" className="w-full">
                                    Get Membership
                                </Button>
                            </Link>
                        </div>

                        {/* Create Recipe Section */}
                        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg shadow-md mb-6 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Create Your Own Recipe</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Share your culinary creativity by adding a new recipe to your collection.
                            </p>
                            <Link href="/user/profile/create-recipe">
                                <Button color="primary" className="text-white w-full">
                                    Create Recipe
                                </Button>
                            </Link>
                        </div>



                        {/* Contact Information */}
                        <div className="space-y-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Info:</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium text-gray-600 dark:text-gray-300">Email:</p>
                                    <p className="text-lg text-gray-900 dark:text-white">{user?.data?.email}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600 dark:text-gray-300">Phone:</p>
                                    <p className="text-lg text-gray-900 dark:text-white">{user?.data?.phone}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600 dark:text-gray-300">Address: </p>
                                    <p className="text-lg text-gray-900 dark:text-white">{user?.data?.address}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Main Content */}
                    <main className="lg:w-1/2">
                        {children}
                    </main>
                </div>
            </div>

        </>

    );
};

export default UserDashboardLayout;


