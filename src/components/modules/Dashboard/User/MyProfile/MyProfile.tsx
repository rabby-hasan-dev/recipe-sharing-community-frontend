
'use client'

import Loading from "@/src/components/UI/Loading";
import { Avatar } from "@nextui-org/avatar";


const MyProfile = ({ user, isPending, isSuccess }: { user: any, isPending: boolean, isSuccess: boolean }) => {



    return (
        <>
            {isPending && !isSuccess && <Loading />}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center mb-6">
                {/* Avatar Section */}
                <Avatar
                    src={user?.profilePicture}
                    alt={user?.username}
                    size="lg"
                    className="border-4 border-white dark:border-gray-800 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                />

                {/* Username Section */}
                <h2 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">{user?.name ? user.fullName : user?.username}</h2>
                <p className="text-gray-500 dark:text-gray-300 mt-2">{user?.bio || 'No bio available.'}</p>

                {/* Followers and Following Count Section */}
                <div className="flex space-x-8 mt-6">
                    <div className="text-center">
                        <h3 className="font-semibold text-xl text-gray-900 dark:text-white">{user?.followerCount}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Followers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-xl text-gray-900 dark:text-white">{user?.followingCount}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Following</p>
                    </div>
                </div>
            </div>

        </>)
};

export default MyProfile;