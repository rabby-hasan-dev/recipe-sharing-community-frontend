import { Navbar } from '@/src/components/UI/navbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <h2>Recipe feed navbar</h2>
            <main>
                {children}

            </main>

        </div>
    );
};

export default layout;