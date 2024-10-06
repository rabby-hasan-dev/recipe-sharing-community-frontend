import AdminOverviewCards from "@/src/components/modules/Dashboard/Admin/AdminOverview";
import AdminSettings from "@/src/components/modules/Dashboard/Admin/AdminSettings";
import NotificationCenter from "@/src/components/modules/Dashboard/Admin/NotificationCenter";

const AdminDashboard = () => {
    return (
        <div className="p-6">
            {/* Dashboard Header */}
            <div className="mb-6">
                <h1 className="text-4xl font-bold ">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">
                    Overview of your admin settings, notifications, and user activity.
                </p>
            </div>

            {/* Admin Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <AdminOverviewCards />
            </div>

            {/* Notification Center */}
            <div className="mb-6">
                <div className=" shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold  mb-4">Notification Center</h2>
                    <NotificationCenter />
                </div>
            </div>

            {/* Admin Settings */}
            <div className="mb-6">
                <div className=" shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold  mb-4">Admin Settings</h2>
                    <AdminSettings />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;