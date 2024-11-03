import React from 'react';

const FAQSection = () => {
    return (
        <>

            <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Frequently Asked Questions</h2>
                <div className="container mx-auto px-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 cursor-pointer">
                            How do I share a recipe?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 hidden">
                            To share a recipe, go to your profile and click on "Add Recipe" to start posting.
                        </p>
                    </div>
                    {/* Repeat for more FAQs */}
                </div>
            </section>



        </>
    );
};

export default FAQSection;