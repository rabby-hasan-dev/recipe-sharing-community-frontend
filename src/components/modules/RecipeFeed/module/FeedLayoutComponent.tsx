
'use client'
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Select, SelectItem } from '@nextui-org/select';
import { ArrowDownWideNarrow, PlusIcon } from 'lucide-react';
import { useState } from 'react';

export default function FeedLayoutComponent() {
    const [showLeftSidebar, setShowLeftSidebar] = useState(false);
    const [showRightSidebar, setShowRightSidebar] = useState(false);

    return (
        <div className="flex flex-col md:flex-row px-6 gap-5">
            {/* Toggle Buttons for Mobile */}
            <div className="flex justify-between w-full md:hidden mb-4">
                <button
                    className="bg-red-500 text-white p-2 rounded-md"
                    onClick={() => setShowLeftSidebar(!showLeftSidebar)}
                >
                    {showLeftSidebar ? 'Hide Navigation' : 'Show Navigation'}
                </button>
                <button
                    className="bg-purple-800 text-white p-2 rounded-md"
                    onClick={() => setShowRightSidebar(!showRightSidebar)}
                >
                    {showRightSidebar ? 'Hide Info' : 'Show Info'}
                </button>
            </div>

            {/* Right Sidebar - Conditionally Rendered on Small Screens */}
            {showRightSidebar && (
                <aside className="md:hidden w-full bg-purple-800 p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-lg font-bold text-white mb-4">Side Info</h2>
                    <ul>
                        <li className="text-white mb-2"><a href="#">Trending Recipes</a></li>
                        <li className="text-white mb-2"><a href="#">Recommended for You</a></li>

                    </ul>
                </aside>
            )}

            {/* Left Sidebar */}
            <aside className={`md:w-1/4 bg-red-500 p-4 rounded-lg shadow-md ${showLeftSidebar ? 'block' : 'hidden md:block'}`}>
                <h2 className="text-lg font-bold text-white mb-4">Navigation</h2>
                <ul>
                    <li className="text-white mb-2"><a href="#">Home</a></li>
                    <li className="text-white mb-2"><a href="#">Followers</a></li>
                    <li className="text-white mb-2"><a href="#">Following</a></li>
                    <li className="text-white mb-2"><a href="#">Messaging</a></li>
                    <li className="text-white mb-2"><a href="#">Notifications</a></li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="md:w-1/2 w-full bg-green-900 p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4 p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
                    <div className="flex items-center">
                        <Avatar
                            className="rounded-full mr-3"
                            size='lg'
                            alt='Profile-image'
                            src='https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?semt=ais_hybrid'
                        />

                        <Button
                            className="flex items-center"
                            size='md'
                        >
                            <PlusIcon className="mr-1" />
                            <span className="hidden md:block">Create Recipe</span>
                        </Button>
                    </div>
                    <div className="flex items-center">
                        <Select
                            size='sm'
                            startContent={<ArrowDownWideNarrow className="mr-1" />}
                            label=' Sort by:'
                            id="sortOptions"
                            className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                            variant="flat"
                            placeholder="Select"
                        >
                            <SelectItem key="latest">Latest</SelectItem>
                            <SelectItem key="popular">Popular</SelectItem>
                            <SelectItem key="top-rated">Top Rated</SelectItem>
                        </Select>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-white mb-4">Recipe Feed</h1>
                {/* Example posts */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Post Title 1</h2>
                    <p className="text-gray-600">This is an example of a recipe post content.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Post Title 2</h2>
                    <p className="text-gray-600">This is another example of a recipe post content.</p>
                </div>
            </main>

            {/* Right Sidebar for Large Screens */}
            <aside className={`md:w-1/4 bg-purple-800 p-4 rounded-lg shadow-md ${showRightSidebar ? 'block md:block' : 'hidden md:block'}`}>
                <h2 className="text-lg font-bold text-white mb-4">Side Info</h2>
                <ul>
                    <li className="text-white mb-2"><a href="#">Trending Recipes</a></li>
                    <li className="text-white mb-2"><a href="#">Recommended for You</a></li>
                    <li className="text-white mb-2"><a href="#">Groups</a></li>
                    <li className="text-white mb-2"><a href="#">Events</a></li>
                </ul>
            </aside>
        </div>
    );
}
