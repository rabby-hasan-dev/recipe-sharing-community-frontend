import React from 'react';

const FeatureSection = () => {
    return (
        <>

            <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Key Features</h2>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {/* Card 1: Recipe Creation & Sharing */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
                        <img src="/icons/recipe-creation.svg" alt="Recipe Creation" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">Recipe Creation & Sharing</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">Easily create, update, and share your recipes with the community.</p>
                    </div>

                    {/* Card 2: Social Connectivity */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
                        <img src="/icons/social-connect.svg" alt="Social Connectivity" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">Social Connectivity</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">Follow other users, comment on recipes, and build connections with fellow food enthusiasts.</p>
                    </div>

                    {/* Card 3: Recipe Rating System */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
                        <img src="/icons/rating-system.svg" alt="Recipe Rating" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">Recipe Rating System</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">Rate and review recipes to highlight the best ones and help users discover top-rated dishes.</p>
                    </div>

                    {/* Card 4: Premium Access */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
                        <img src="/icons/premium-access.svg" alt="Premium Access" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">Premium Access</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">Upgrade to a premium membership for exclusive recipes, ad-free browsing, and more.</p>
                    </div>
                </div>
            </section>





        </>

    );
};

export default FeatureSection;