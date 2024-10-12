'use client'

import UserTable from '@/src/components/modules/Dashboard/Admin/UserTable';
import Loading from '@/src/components/UI/Loading';
import { useGetAllUser } from '@/src/hooks/adminHooks';
import { Pagination } from '@nextui-org/pagination';
import React, { useState } from 'react';

const page = () => {
    const [page, setPage] = useState(1);
    const { data: allUsers, isPending, isSuccess, error } = useGetAllUser(page);
    const metaData = allUsers?.meta;

    const userHandler = (e: number) => {
        setPage(e)

    }
    return (
        <div className="min-h-screen dark:bg-gray-900 bg-gray-50 p-8">
            {/* Page Title */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    All Users
                </h1>
                <p className="text-gray-600 mt-2">
                    Manage and view all registered users on the platform
                </p>
            </div>

            {/* User Table or Loading */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                {isPending ? (
                    <div className="flex justify-center items-center h-64">
                        <Loading />
                    </div>
                ) : isSuccess ? (
                    <UserTable users={allUsers?.data} />
                ) : (
                    <div className="text-center text-red-500">
                        <p>Failed to load users. Please try again later.</p>
                    </div>
                )}

                <div className='ml-6'>
                    <Pagination onChange={userHandler} total={metaData?.totalPage} initialPage={page} />
                </div>
            </div>
        </div>
    );
};

export default page;