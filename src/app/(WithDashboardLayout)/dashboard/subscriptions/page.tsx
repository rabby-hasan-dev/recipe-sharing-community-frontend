"use client";
import SubscriptionTable from "@/src/components/modules/Dashboard/Admin/SubscriptionTable";
import Loading from "@/src/components/UI/Loading";
import { useGetAllPremiumUser } from "@/src/hooks/adminHooks";

const page = () => {
  const { data: premiumUser, isPending, isSuccess } = useGetAllPremiumUser();

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          All Subscription Members
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          View and manage all subscribed members of the platform
        </p>
      </div>

      {/* Subscription Table */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        {isPending ? (
          <div className="flex justify-center items-center h-64">
            <Loading />
          </div>
        ) : isSuccess ? (
          <SubscriptionTable subscriptions={premiumUser?.data} />
        ) : (
          <div className="text-center text-red-500 text-xl">
            <p>Failed to load Premium users. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
