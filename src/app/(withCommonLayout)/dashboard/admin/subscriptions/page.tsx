'use client'
import SubscriptionTable from '@/src/components/modules/Dashboard/Admin/SubscriptionTable';
import Loading from '@/src/components/UI/Loading';
import { useGetAllPremiumUser, useGetAllUser } from '@/src/hooks/adminHooks';



const page = () => {
    const { data: premiumUser, isPending, isSuccess, error } = useGetAllPremiumUser();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Page Title */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    All Subscription Members
                </h1>
                <p className="text-gray-600 mt-2">
                    View and manage all subscribed members of the platform
                </p>
            </div>

            {/* Subscription Table */}
            <div className="bg-white shadow-lg rounded-lg p-6">

                {isPending ? (
                    <div className="flex justify-center items-center h-64">
                        <Loading />
                    </div>
                ) : isSuccess ? (
                    <SubscriptionTable subscriptions={premiumUser?.data} />
                ) : (
                    <div className="text-center text-red-500">
                        <p>Failed to load Premuim users. Please try again later.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default page;