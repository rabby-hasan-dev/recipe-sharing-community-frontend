import React from "react";

const HowItWorkSection = () => {
  return (
    <>
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          How It Works
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {/* Step 1: Sign Up */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
            <img
              alt="Sign Up"
              className="w-16 mx-auto mb-4"
              src="/icons/sign-up.svg"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Sign Up
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create your free account to join the community and start exploring
              recipes.
            </p>
          </div>

          {/* Step 2: Explore Recipes */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
            <img
              alt="Explore Recipes"
              className="w-16 mx-auto mb-4"
              src="/icons/explore-recipes.svg"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Explore Recipes
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover a variety of recipes shared by our users, from quick
              snacks to gourmet dishes.
            </p>
          </div>

          {/* Step 3: Share Your Own */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
            <img
              alt="Share Recipes"
              className="w-16 mx-auto mb-4"
              src="/icons/share-recipe.svg"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Share Your Own
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Post your favorite recipes and inspire others with your cooking
              skills.
            </p>
          </div>

          {/* Step 4: Upgrade to Premium */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
            <img
              alt="Premium Access"
              className="w-16 mx-auto mb-4"
              src="/icons/premium-access.svg"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Upgrade to Premium
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy exclusive recipes and an ad-free experience with premium
              membership.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorkSection;
