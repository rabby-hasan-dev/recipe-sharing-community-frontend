
import FeedNavbar from '@/src/components/modules/RecipeFeed/UI/FeedNavbar';
import SearchProvider from '@/src/context/searchState';
import React from 'react';
const layout = ({ children }: { children: React.ReactNode }) => {
    return (

        <div>
            <SearchProvider>
                <FeedNavbar />

                <main>
                    {children}

                </main>

            </SearchProvider>

        </div>
    );
};

export default layout;

