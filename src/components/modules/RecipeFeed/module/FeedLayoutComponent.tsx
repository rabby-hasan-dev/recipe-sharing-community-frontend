
'use client'
import { useUser } from '@/src/context/cureentUser';
import { useGetRecipe } from '@/src/hooks/receipeHooks';
import { IRecipe } from '@/src/types/recipe.types';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';

import { Select, SelectItem } from '@nextui-org/select';
import { ArrowDownWideNarrow, HomeIcon, MessageSquareIcon, PlusIcon, User2Icon, Users } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RecipeCard from '../../Recipe/RecipeCard';
import { Tooltip } from '@nextui-org/tooltip';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '@nextui-org/spinner';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/src/lib/AxiosInstance';
import { isPreemium } from '@/src/hooks/preemiumUserHook';
import Cookies from 'js-cookie';
import axios from 'axios';
import envConfig from '@/src/config/envConfig';





const getAuthToken = () => {
    return Cookies.get('accessToken'); // Assuming the token is stored as 'authToken' in cookies
};

// Create a new Axios instance for client-side requests
const axiosClient = axios.create({
    baseURL: envConfig.baseApi,  // Set your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});







export default function FeedLayoutComponent() {
    const [showLeftSidebar, setShowLeftSidebar] = useState(false);
    const [showRightSidebar, setShowRightSidebar] = useState(false);
    const { user } = useUser();
    const { data } = useGetRecipe();
    const recipeFeeds = data?.data || [];
    const recipeFeedMetaData = data?.meta;


    const [items, setItems] = useState<IRecipe[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedSort, setSelectedSort] = useState<string>('-upVoteCount');
    const [selectedFeed, setSelectedFeed] = useState<string>('');
    const router = useRouter()





    const fetchData = async () => {
        if (loading) return;

        setLoading(true);
        try {
            // Get the token from storage
            const token = getAuthToken();

            // Set token in Authorization header if available
            if (token) {
                axiosClient.defaults.headers['Authorization'] = token;
            }

            let response;

            // Perform the API call depending on the selected feed
            if (selectedFeed === 'premium') {
                response = await axiosClient.get('/feed/premium', {
                    params: {
                        page,
                        sort: selectedSort,
                    },
                });
            } else {
                response = await axiosClient.get('/feed', {
                    params: {

                        page,
                        sort: selectedSort,
                    },
                });
            }

            // Handle the response
            const FeedData = response?.data;
            if (FeedData?.data) {
                // Update the items with the fetched data
                setItems((prevItems) => [...prevItems, ...FeedData?.data]);

                // Check if there are no more results
                if (FeedData?.data?.length === 0) {
                    setHasMore(false);
                } else {
                    // Increment the page number for pagination
                    setPage((prevPage) => prevPage + 1);
                }
            } else {
                console.error('Error: No data found in response');
                setHasMore(false);  // Stop fetching if no data is found
            }
        } catch (error) {
            console.error('Error fetching data:', error);  // Log errors for debugging
        } finally {
            setLoading(false);  // Set loading state to false after the request
        }
    };

    // Reset and fetch new data when search query changes
    useEffect(() => {
        setItems([]); // Reset items
        setPage(1);   // Reset page
        setHasMore(true); // Reset hasMore flag

        fetchData();  // Fetch data with new search query



    }, [selectedSort, selectedFeed]);


    const handleFilterPrimiumRecipe = async (feedType: string) => {

        if (feedType === 'premium') {
            const preemiumUser = await isPreemium(user?.userId as string)
            if (!preemiumUser) {
                toast.error("You are not a Preemium Member. Please! Got Preemium MemberShip")
                router.push('/user/profile/my-recipes')
            }

        }

        setSelectedFeed(feedType)
    }













    return (
        <div className="flex flex-col md:flex-row px-6 gap-5">
            {/* Toggle Buttons for Mobile */}
            <div className="flex justify-between w-full md:hidden mb-4">
                <button
                    className="  p-2 rounded-md"
                    onClick={() => setShowLeftSidebar(!showLeftSidebar)}
                >
                    {showLeftSidebar ? 'Hide Navigation' : 'Show Navigation'}
                </button>
                <button
                    className="  p-2 rounded-md"
                    onClick={() => setShowRightSidebar(!showRightSidebar)}
                >
                    {showRightSidebar ? 'Hide Info' : 'Show Info'}
                </button>
            </div>

            {/* Right Sidebar - Conditionally Rendered on Small Screens */}
            {showRightSidebar && (
                <aside className="md:hidden w-full  p-4 rounded-lg shadow-md mb-4">
                    {/* sidebar content */}
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Friend Suggestions</h2>
                        <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                <Avatar
                                    src='https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?semt=ais_hybrid'
                                    alt="User Profile"
                                    className="mr-4"
                                    size="lg"
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">User Name</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">User bio goes here</p>
                                </div>
                            </div>
                            <div className="flex justify-center w-full mb-2">
                                <Button
                                    size='md'
                                    variant='bordered'
                                    className="w-full rounded-full"
                                >
                                    Follow
                                </Button>
                            </div>
                            <div className="mt-2 w-full text-center">
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    Joined on: <span className="font-semibold">January 1, 2024</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </aside>
            )}

            {/* Left Sidebar */}
            <aside className={`md:w-1/4 space-y-2  p-4 rounded-lg shadow-md ${showLeftSidebar ? 'block' : 'hidden md:block'}`}>
                {/* sidebar content */}
                <div className='border-2 rounded-lg shadow-md  p-4 mb-4'>
                    <h2 className="text-lg font-bold  mb-4">Navigation</h2>
                    <ul>
                        <li className=" mb-2">
                            <Link href="/recipe-feeds" aria-label="Home" className='flex items-center'>
                                <HomeIcon className="w-6 h-6 cursor-pointer transition-colors duration-150 hover:text-blue-600" /><span className='ml-1'>Recipe Feeds</span>
                            </Link>
                        </li>

                        <li className=" mb-2">
                            <Link href="#messages" aria-label="Messages" className='flex items-center'>
                                <MessageSquareIcon className="w-6 h-6 cursor-pointer transition-colors duration-150 hover:text-blue-600" /> <span className='ml-1'>Message</span>
                            </Link>
                        </li>
                        <li className=" mb-2">
                            <Link href="#group" aria-label="Gorup" className='flex items-center'>
                                <span className='rounded-full'>  <Users className="  w-6 h-6 cursor-pointer transition-colors duration-150 hover:text-blue-600" /></span> <span className='ml-1'>Group</span>
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* category */}
                <div className="border-2 rounded-lg shadow-md mb-4 p-4">
                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    <ul className="space-y-2">
                        <li>
                            <Button
                                onClick={() => handleFilterPrimiumRecipe('freemium')}
                                className="w-full text-left dark:text-white"
                            >
                                Freemium Recipes
                            </Button>
                        </li>
                        {
                            user?.isPremium ? <li>
                                <Button
                                    onClick={() => handleFilterPrimiumRecipe('premium')}
                                    className="w-full text-left dark:text-white"
                                >
                                    Premium Recipes
                                </Button>
                            </li> : <>

                                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-md shadow-lg mt-8">
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold mb-4">
                                            Unlock Premium Recipes
                                        </h2>
                                        <p className="text-lg mb-6">
                                            Get exclusive access to premium recipes by becoming a premium member.
                                        </p>
                                        <div className="flex justify-center space-x-4">


                                            <Link href='#membership' >

                                                <Button
                                                    className="bg-yellow-400 text-indigo-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition duration-300"

                                                >
                                                    Become a Premium Member
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </>
                        }








                    </ul>
                </div>

            </aside>

            {/* Main Content */}
            <main className="md:w-1/2 w-full  lg:p-4 rounded-lg shadow-md  ">
                {/* header main component */}
                <div className="flex items-center justify-between mb-4 p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
                    <div className="flex items-center">
                        <Avatar
                            className="rounded-full mr-3"
                            size='md'
                            alt='Profile-image'
                            src='https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?semt=ais_hybrid'
                        />
                        <Tooltip content="Create Recipe">
                            <Button
                                isIconOnly
                                variant="faded"
                                className="flex items-center"
                                size='sm'
                            >

                                <PlusIcon />

                            </Button>
                        </Tooltip>

                    </div>
                    <div className="flex items-center  max-w-36 w-full ">
                        <Select
                            size='sm'
                            className='w-full'
                            startContent={<ArrowDownWideNarrow className="mr-1" />}
                            label=' Sort by:'
                            id="sortOptions"
                            variant="flat"
                            placeholder="Select"
                        >
                            <SelectItem key="latest">Latest</SelectItem>
                            <SelectItem key="popular">Popular</SelectItem>
                            <SelectItem key="top-rated">Top Rated</SelectItem>
                        </Select>
                    </div>
                </div>

                <h1 className="text-2xl font-bold  mb-4">Recipe Feed</h1>

                {/* <div className="space-y-4">

                    {
                        recipeFeeds?.map((recipe: IRecipe) => <RecipeCard key={recipe._id} recipe={recipe} />)
                    }
                </div> */}

                <div className="space-y-4">

                    <InfiniteScroll
                        style={{ overflow: 'inherit', width: '100%' }}
                        className='space-y-5'
                        dataLength={items?.length}
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<div className="text-center"><Spinner /></div>}
                        endMessage={
                            <p className="text-2xl text-center font-bold text-gray-700 dark:text-gray-300 mb-2">
                                No more Recipes!
                            </p>
                        }
                    >

                        {items?.map((recipe: IRecipe, index) => (
                            <RecipeCard key={`${recipe?._id}-${index}`} recipe={recipe} />
                        ))


                        }



                    </InfiniteScroll>


                </div>



            </main>

            {/* Right Sidebar for Large Screens */}
            <aside className={`md:w-1/4  p-4 rounded-lg shadow-md ${showRightSidebar ? 'block md:block' : 'hidden md:block'}`}>
                {/* sidebar content */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Friend Suggestions</h2>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                        <div className="flex items-center mb-4">
                            <Avatar
                                src='https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?semt=ais_hybrid'
                                alt="User Profile"
                                className="mr-4"
                                size="lg"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">User Name</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">User bio goes here</p>
                            </div>
                        </div>
                        <div className="flex justify-center w-full mb-2">
                            <Button
                                size='md'
                                variant='bordered'
                                className="w-full rounded-full"
                            >
                                Follow
                            </Button>
                        </div>
                        <div className="mt-2 w-full text-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Joined on: <span className="font-semibold">January 1, 2024</span>
                            </p>
                        </div>
                    </div>
                </div>

            </aside>
        </div>
    );
}
