
"use client";
import Cookies from 'js-cookie'
import { IRecipe } from "@/src/types/recipe.types";
import RecipeCard from "./RecipeCard";
import { Spinner } from "@nextui-org/spinner";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import Container from "../../UI/Container";
import { Input } from "@nextui-org/input";
import useDebounce from "@/src/hooks/debounceHooks";
import { SearchIcon } from "lucide-react";
import { useUser } from "@/src/context/cureentUser";
import Link from "next/link";
import envConfig from "@/src/config/envConfig";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { isPreemium } from '@/src/hooks/preemiumUserHook';
import { toast } from 'sonner';

interface RecipeFeedProps {
    initialPublicFeed: IRecipe[];
    initialPremiumFeed?: IRecipe[];
}


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




export default function RecipeFeed({ initialPublicFeed, }: RecipeFeedProps) {
    const { user } = useUser();
    const { register, watch } = useForm();
    const searchTerm = useDebounce(watch('search'), 500);
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
                        searchTerm,
                        page,
                        sort: selectedSort,
                    },
                });
            } else {
                response = await axiosClient.get('/feed', {
                    params: {
                        searchTerm,
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
        if (searchTerm !== undefined) {
            fetchData();  // Fetch data with new search query
        }


    }, [searchTerm, selectedSort, selectedFeed]);


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
        <Container>
            <div className="mb-8 p-6 bg-white shadow-lg rounded-lg sticky top-0 z-20 border border-gray-200 dark:bg-black dark:border-gray-700 dark:text-white">
                <h2 className="text-4xl font-bold text-center mb-4 text-dark dark:text-light">
                    Discover Delicious Recipes
                </h2>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    {/* Search Bar */}
                    <form>
                        <Input
                            {...register('search')}
                            aria-label="Search"
                            placeholder="Search Recipe..."
                            size="md"
                            classNames={{
                                inputWrapper: "bg-default-100",
                                input: "text-sm"
                            }}
                            startContent={<SearchIcon className="flex-shrink-0 pointer-events-none text-base " />}
                            type="text"
                        />
                    </form>

                    <div className="flex items-center w-full sm:w-auto mt-4 sm:mt-0">

                        <Button
                            className="sm:mt-0 sm:ml-4 w-full rounded-md bg-default-900 font-semibold text-default"
                            size="md"
                            onClick={() => setSelectedSort("-upVoteCount")}
                        >
                            Popular Recipe
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col md:flex-row justify-between">
                <aside className="w-full md:w-1/4 mb-8 md:mb-0">
                    <div className="border sticky top-40 z-20 border-gray-200 rounded-lg shadow-md p-4 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
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
                                user?.email ? <>
                                    <li>
                                        <Button
                                            onClick={() => handleFilterPrimiumRecipe('premium')}
                                            className="w-full text-left dark:text-white"
                                        >
                                            Premium Recipes
                                        </Button>
                                    </li>
                                </> : <>
                                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-md shadow-lg mt-8">
                                        <div className="text-center">
                                            <h2 className="text-3xl font-bold mb-4">
                                                Unlock Premium Recipes
                                            </h2>
                                            <p className="text-lg mb-6">
                                                Get exclusive access to premium recipes by becoming a premium member. Already a member? Log in to view.
                                            </p>
                                            <div className="flex justify-center space-x-4">


                                                <Link href='/user/profile/my-recipes' >

                                                    <button
                                                        className="bg-yellow-400 text-indigo-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition duration-300"

                                                    >
                                                        Become a Premium Member
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            }

                        </ul>
                    </div>
                </aside>

                {/* Main content area for displaying recipes */}
                <main className="w-full md:w-3/4">
                    <div className="flex flex-wrap justify-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6">


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


                        </div>
                    </div>
                </main >
            </div >
        </Container >
    );
}