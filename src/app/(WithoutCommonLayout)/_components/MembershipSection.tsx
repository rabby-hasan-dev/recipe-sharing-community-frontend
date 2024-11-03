import React from 'react';

const MembershipSection = () => {
    return (
        <section className="py-16 text-center bg-gradient-to-r from-green-600 to-green-500 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="inline-block mb-6 px-4 py-2 bg-yellow-300 text-green-800 font-semibold rounded-full shadow-lg uppercase text-sm tracking-wider">
                    Premium Membership
                </div>
                <h2 className="text-4xl font-bold mb-4">Upgrade to Premium</h2>
                <p className="text-lg mb-8 max-w-md mx-auto leading-relaxed">
                    Unlock exclusive recipes, advanced filters, and enjoy an ad-free experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto text-left">
                    <div className="flex items-center justify-center bg-white bg-opacity-10 p-6 rounded-lg">
                        <img src="/icons/recipe-book.svg" alt="Exclusive Recipes" className="w-10 h-10 mr-4" />
                        <span>Exclusive Recipes</span>
                    </div>
                    <div className="flex items-center justify-center bg-white bg-opacity-10 p-6 rounded-lg">
                        <img src="/icons/filter.svg" alt="Advanced Filters" className="w-10 h-10 mr-4" />
                        <span>Advanced Filters</span>
                    </div>
                    <div className="flex items-center justify-center bg-white bg-opacity-10 p-6 rounded-lg">
                        <img src="/icons/ad-free.svg" alt="Ad-Free Experience" className="w-10 h-10 mr-4" />
                        <span>Ad-Free Experience</span>
                    </div>
                </div>

                <a
                    href="#"
                    className="inline-block bg-white text-green-700 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
                >
                    Get Premium
                </a>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-green-400 opacity-20 rounded-full transform rotate-45"></div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-green-400 opacity-20 rounded-full transform rotate-45"></div>
        </section>

    );
};

export default MembershipSection;