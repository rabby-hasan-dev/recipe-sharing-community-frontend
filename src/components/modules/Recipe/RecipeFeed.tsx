
"use client";

import { IRecipe } from "@/src/types/recipe.types";
import RecipeCard from "./RecipeCard";
import { Spinner } from "@nextui-org/spinner";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import Container from "../../UI/Container";
import { Input } from "@nextui-org/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useDebounce from "@/src/hooks/debounceHooks";
import { SearchIcon } from "lucide-react";
import { useInfiniteScroll } from "@/src/hooks/useInfiniteScroll";
import { useUser } from "@/src/context/cureentUser";
import Link from "next/link";

interface RecipeFeedProps {
    initialPublicFeed: IRecipe[];
    initialPremiumFeed: IRecipe[];
}

export default function RecipeFeed({ initialPublicFeed, initialPremiumFeed }: RecipeFeedProps) {
    const { user } = useUser();
    const { handleSubmit, register, watch } = useForm();
    const searchTerm = useDebounce(watch('search'));
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [feedData, setFeedData] = useState<IRecipe[]>(initialPublicFeed);
    const [searchResults, setSearchResults] = useState<IRecipe[]>([]);
    const { recipes, loadMore, hasMore } = useInfiniteScroll(feedData, selectedFilter);

    // Initialize feed data based on selected filter
    useEffect(() => {
        if (selectedFilter === 'premium') {
            setFeedData(initialPremiumFeed); // Set premium recipes
        } else if (selectedFilter === 'freemium') {
            setFeedData(initialPublicFeed); // Set public recipes
        } else {
            setFeedData(initialPublicFeed); //default public
        }
    }, [selectedFilter, initialPublicFeed, initialPremiumFeed]);


    // Handle Search
    useEffect(() => {
        if (searchTerm) {

        }
    }, [searchTerm, feedData]);


    // Filter Handler
    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <div className="mb-8 p-6 bg-white shadow-lg rounded-lg sticky top-0 z-20 border border-gray-200 dark:bg-black dark:border-gray-700 dark:text-white">
                <h2 className="text-4xl font-bold text-center mb-4 text-dark dark:text-light">
                    Discover Delicious Recipes
                </h2>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    {/* Search Bar */}
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <select
                            name="filter"
                            value={selectedFilter}
                            onChange={(e) => handleFilterChange(e.target.value)}
                            className="p-2 w-full sm:w-auto border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        >
                            <option disabled value="">Filter Recipe</option>
                            <option value="">Recent Recipe</option>
                            <option value="">Ancient Recipe</option>

                        </select>
                        <Button
                            className="sm:mt-0 sm:ml-4 w-full rounded-md bg-default-900 font-semibold text-default"
                            size="md"
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
                                    onClick={() => handleFilterChange('freemium')}
                                    className="w-full text-left dark:text-white"
                                >
                                    Freemium Recipes
                                </Button>
                            </li>
                            {
                                user?.email ? <>
                                    <li>
                                        <Button
                                            onClick={() => handleFilterChange('premium')}
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
                                {recipes?.map((recipe: IRecipe) => (
                                    <RecipeCard key={recipe?._id} recipe={recipe} />
                                ))}
                            </div>

                            {/* Loading more button */}
                            {hasMore && (
                                <div className="flex justify-center my-10">
                                    <button onClick={loadMore}>
                                        <Spinner />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </Container>
    );
}
