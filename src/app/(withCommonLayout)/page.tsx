
import RecipeFeed from "@/src/components/modules/Recipe/RecipeFeed";
import Searchbar from "@/src/components/modules/Recipe/Searchbar";
import Container from "@/src/components/UI/Container";
import { getRecipe } from "@/src/services/Recipe";
import { Button } from "@nextui-org/button";
import { Select } from "@nextui-org/select";

const HomePage = async () => {
    const { data } = await getRecipe();


    return (
        <Container>
            {/* Sticky Header with Search and Filter */}
            <div className=" mb-8 p-6  bg-white shadow-lg rounded-lg sticky top-0 z-20 border border-gray-200">
                <h2 className="text-4xl font-bold  text-center mb-4">Discover Delicious Recipes</h2>
                <div className="flex justify-between items-center mt-4">
                    <Searchbar />
                    <div className="flex items-center">
                        <Select
                            placeholder="Filter by category"
                            className="mr-2"
                            options={[
                                { value: "all", label: "All" },
                                { value: "vegan", label: "Vegan" },
                                { value: "vegetarian", label: "Vegetarian" },
                                { value: "gluten-free", label: "Gluten-Free" },
                            ]}
                        />
                        <Button
                            className=" hover:bg-blue-700 text-white"
                            size="md"
                        >
                            Filter
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <div className="flex flex-wrap justify-between">
                {/* Sidebar for additional filters/categories */}
                <aside className="w-full md:w-1/4 ">
                    <div className="border sticky top-40 z-20 border-gray-200 rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold mb-2">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Button className="w-full text-left">All</Button>
                            </li>
                            <li>
                                <Button className="w-full text-left">Vegan</Button>
                            </li>
                            <li>
                                <Button className="w-full text-left">Vegetarian</Button>
                            </li>
                            <li>
                                <Button className="w-full text-left">Gluten-Free</Button>
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

