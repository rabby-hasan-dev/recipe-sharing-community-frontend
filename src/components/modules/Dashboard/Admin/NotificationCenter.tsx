'use client'

import { Card } from "@nextui-org/card";


export default function NotificationCenter() {
    const notifications = [
        { message: 'New recipe submission: Spaghetti Carbonara', time: '2 hours ago' },
        { message: 'User Jane Smith has been blocked', time: '1 day ago' },
    ];

    return (
        <div className="p-6">
            {notifications.map((notification, index) => (
                <Card key={index} className="mb-4 p-4">
                    <h1>{notification.message}</h1>
                    <p className="text-gray-500 text-sm">{notification.time}</p>
                </Card>
            ))}
        </div>
    );
}
