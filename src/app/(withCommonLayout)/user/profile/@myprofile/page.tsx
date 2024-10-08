'use client'

import Loading from "@/src/components/UI/Loading";
import { IUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";


const MyProfile = ({ user, isPending, isSuccess }: { user: IUser, isPending: boolean, isSuccess: boolean }) => {


    return (
        <>
            {isPending && !isSuccess && <Loading />}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center mb-6">
                <Avatar
                    src={user?.profilePicture}
                    alt={user?.username}
                    size="lg"
                    className="border-4 border-white shadow-lg"
                />
                <h2 className="text-3xl font-bold mt-4">{user?.username}</h2>
                <p className="text-gray-500">{user?.bio}</p>
                <div className="flex space-x-6 mt-4">
                    <div className="text-center">
                        <h3 className="font-semibold">{user?.followerCount}</h3>
                        <p className="text-gray-600">Followers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold">{user?.followingCount}</h3>
                        <p className="text-gray-600">Following</p>
                    </div>
                </div>
            </div>
        </>)
};

export default MyProfile;