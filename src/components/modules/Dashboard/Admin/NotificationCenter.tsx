"use client";

export default function NotificationCenter() {
  const notifications = [
    {
      message: "New recipe submission: Spaghetti Carbonara",
      time: "2 hours ago",
    },
    { message: "User Jane Smith has been blocked", time: "1 day ago" },
  ];

  return (
    <div className="p-6">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className="mb-4 p-4 rounded-lg shadow-md transition-colors duration-300
                       bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100"
        >
          <h1 className="text-lg font-bold">{notification.message}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {notification.time}
          </p>
        </div>
      ))}
    </div>
  );
}
