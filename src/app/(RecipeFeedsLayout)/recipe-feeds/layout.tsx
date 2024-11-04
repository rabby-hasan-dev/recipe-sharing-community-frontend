
import FeedNavbar from '@/src/components/modules/RecipeFeed/UI/FeedNavbar';
import React from 'react';
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <FeedNavbar />
            <main>
                {children}

            </main>

        </div>
    );
};

export default layout;