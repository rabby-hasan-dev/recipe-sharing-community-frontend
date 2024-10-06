'use client'

import { Card } from "@nextui-org/card";


export default function AdminOverviewCards() {
    const stats = [
        { label: 'Total Users', value: '1200' },
        { label: 'Total Recipes', value: '320' },
        { label: 'Premium Users', value: '80' },
    ];

    return (
        <>
            {stats.map((stat, index) => (
                <Card key={index} className="p-6 shadow-md">
                    <h2 className="text-lg font-semibold">{stat.value}</h2>
                    <p>{stat.label}</p>
                </Card>
            ))}
        </>
    );
}
