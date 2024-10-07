"use client"
import { useGetMe } from "@/src/hooks/userHooks";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ReactNode } from "react";
import MyProfile from "./@myprofile/page";

const UserDashboardLayout = ({ children }: { children: ReactNode }) => {
    const { data: user, isPending, isSuccess } = useGetMe();

    return (
        <div className="container mx-auto p-6">
            {/* Profile Header */}
            <MyProfile user={user?.data} isPending={isPending} isSuccess={isSuccess} />
            {/* Profile Navigation Bar */}
            <div className="bg-gray-100 rounded-lg shadow-md flex justify-center mb-6">

                <Link href="/user/my-recipes">
                    <Button className="py-4 px-6 rounded-none">My Recipes</Button>
                </Link>
                <Link href="#">
                    <Button className="py-4 px-6 rounded-none">Followers</Button>
                </Link>
                <Link href="#">
                    <Button className="py-4 px-6 rounded-none">Following</Button>
                </Link>
                <Link href="/user/edit-profile">
                    <Button className="py-4 px-6 rounded-none">Edit Profile</Button>
                </Link>

            </div>

            <div className="lg:flex justify-between gap-8">
                <div className="lg:w-1/2">
                    {/* Bio Section */}
                    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-bold mb-2">Bio</h3>
                        <p className="text-gray-700">{user?.data?.bio || 'No bio available.'}</p>
                    </div>
                    {/* Membership Section */}
                    <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Become a Member</h3>
                        <p className="mb-4">
                            Enjoy exclusive content and features by joining our membership!
                        </p>
                        <Link href="/user/membership" >
                            <Button color="success" className="w-full">
                                Get Membership
                            </Button>
                        </Link>
                    </div>

                    {/* Create Recipe Section */}
                    <div className="bg-green-50 p-4 rounded-lg shadow-md mb-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Create Your Own Recipe</h3>
                        <p className="mb-4">
                            Share your culinary creativity by adding a new recipe to your collection.
                        </p>
                        <Link href="/user/create-recipe">
                            <Button color="primary" className="text-white w-full">
                                Create Recipe
                            </Button>
                        </Link>
                    </div>


                </div>
                {/* main content */}
                <main className="lg:w-1/2">
                    {children}

                </main>
            </div>
        </div>
    );
};

export default UserDashboardLayout;


