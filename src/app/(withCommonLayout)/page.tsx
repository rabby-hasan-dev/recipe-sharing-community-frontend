
import RecipeFeed from "@/src/components/modules/Recipe/RecipeFeed";
import Container from "@/src/components/UI/Container";
import { getRecipe } from "@/src/services/Recipe";
import { Button } from "@nextui-org/button";


const HomePage = async () => {
    const { data } = await getRecipe();

    return (
        <Container>
            <div className="mb-8 p-6 bg-white shadow-lg rounded-lg sticky top-0 z-20 border border-gray-200 dark:bg-black dark:border-gray-700 dark:text-white">
                <h2 className="text-4xl font-bold text-center mb-4 text-dark dark:text-light">
                    Discover Delicious Recipes
                </h2>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    <input
                        className="p-2 mb-4 sm:mb-0 w-full sm:w-auto border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        placeholder="Search Recipes"
                    />
                    <div className="flex items-center w-full sm:w-auto">
                        <select
                            name="filter"
                            className="p-2 w-full sm:w-auto border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        >
                            <option disabled value="">Filter Recipe</option>
                            <option value="premium">Recent Recipe</option>
                            <option value="freemium">Ancient Recipe</option>
                        </select>
                        <Button
                            className=" sm:mt-0 sm:ml-4  w-full rounded-md bg-default-900 font-semibold text-default"
                            size="md"

                        >
                            Filter
                        </Button>

                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col md:flex-row justify-between">
                {/* Sidebar for additional filters/categories */}
                <aside className="w-full md:w-1/4 mb-8 md:mb-0">
                    <div className="border sticky top-40 z-20 border-gray-200 rounded-lg shadow-md p-4 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                        <h3 className="text-lg font-semibold mb-2">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Button className="w-full text-left dark:text-white">All Recipes</Button>
                            </li>
                            <li>
                                <Button className="w-full text-left dark:text-white">Premium Recipe</Button>
                            </li>
                            <li>
                                <Button className="w-full text-left dark:text-white">Freemium</Button>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main content area for displaying recipes */}
                <main className="w-full md:w-3/4">
                    <div className="flex flex-wrap justify-center">
                        <RecipeFeed initialData={data} />
                    </div>
                </main>
            </div>
        </Container>
    );
}


export default HomePage;

