import React from 'react';

const FeatureSection = () => {
    return (
        <>

            <section className="py-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Key Features</h2>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
                    {/* <!-- Card 1: Recipe Creation & Sharing --> */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <img src="/icons/recipe-creation.svg" alt="Recipe Creation" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-center">Recipe Creation & Sharing</h3>
                        <p className="text-gray-600 text-center">Easily create, update, and share your recipes with the community.</p>
                    </div>

                    {/* <!-- Card 2: Social Connectivity --> */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <img src="/icons/social-connect.svg" alt="Social Connectivity" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-center">Social Connectivity</h3>
                        <p className="text-gray-600 text-center">Follow other users, comment on recipes, and build connections with fellow food enthusiasts.</p>
                    </div>
                    {/* 
                    <!-- Card 3: Recipe Rating System --> */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <img src="/icons/rating-system.svg" alt="Recipe Rating" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-center">Recipe Rating System</h3>
                        <p className="text-gray-600 text-center">Rate and review recipes to highlight the best ones and help users discover top-rated dishes.</p>
                    </div>

                    {/* Card 4: Premium Access  */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <img src="/icons/premium-access.svg" alt="Premium Access" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-center">Premium Access</h3>
                        <p className="text-gray-600 text-center">Upgrade to a premium membership for exclusive recipes, ad-free browsing, and more.</p>
                    </div>
                </div>
            </section>



        </>

    );
};

export default FeatureSection;