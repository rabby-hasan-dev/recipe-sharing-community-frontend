
'use client'

import Loading from "@/src/components/UI/Loading";
import { Avatar } from "@nextui-org/avatar";

import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";


const MyProfile = ({ user, isPending, isSuccess }: { user: any, isPending: boolean, isSuccess: boolean }) => {



    return (
        <>
            {isPending && !isSuccess && <Loading />}

            <div className="bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg flex flex-col items-center space-y-6 mb-6 w-full  mx-auto transition duration-300">

                {/* Back Button */}
                <div className="self-start mb-4">
                    <Link href="/recipe-feeds">
                        <CircleArrowLeft className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition duration-300" />
                    </Link>
                </div>

                {/* Avatar Section */}
                <div className="flex flex-col justify-center items-center">
                    <Avatar
                        src={user?.profilePicture}
                        alt={user?.username}
                        size="lg"
                        className="border-4 border-white dark:border-gray-800 shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 text-gray-900 dark:text-white text-center">
                        {user?.name || user?.username || "Unknown User"}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2 text-center px-4">
                        {user?.bio || 'No bio available.'}
                    </p>
                </div>

                {/* Followers and Following Count Section */}
                <div className="flex space-x-10 mt-6">
                    <div className="text-center">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-white">{user?.followerCount ?? 0}</h3>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Followers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-white">{user?.followingCount ?? 0}</h3>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Following</p>
                    </div>
                </div>
            </div>


        </>)
};

export default MyProfile;