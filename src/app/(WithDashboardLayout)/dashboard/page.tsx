import AdminSettings from "@/src/components/modules/Dashboard/Admin/AdminSettings";
import Graph from "@/src/components/modules/Dashboard/Admin/Graph";
import NotificationCenter from "@/src/components/modules/Dashboard/Admin/NotificationCenter";
import StatsCard from "@/src/components/modules/Dashboard/Admin/StatsCard";


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

            {/* Stats Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <StatsCard title="Total Users" value="1,245" icon="👤" />
                <StatsCard title="Premium Users" value="1,245" icon="👤" />
                <StatsCard title="Active Subscriptions" value="325" icon="📅" />
                <StatsCard title="Total Recipes" value="48" icon="📦" />

            </div>
            {/* Graph Section */}
            <div className="mb-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">User Activity Overview</h2>
                    <Graph />
                </div>
            </div>

            {/* Notification Center */}
            <div className="mb-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Notification Center</h2>
                    <NotificationCenter />
                </div>
            </div>

            {/* Admin Settings */}
            <div className="mb-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Admin Settings</h2>
                    <AdminSettings />
                </div>
            </div>
        </div>

    );
};

export default AdminDashboard;