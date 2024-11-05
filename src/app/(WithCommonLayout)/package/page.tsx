import Link from "next/link";
import React from "react";

const PackagePage = () => {
  return (
    <div>
      <section className="pt-10 pb-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Membership Packages
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Basic Package */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
              Basic
            </h3>
            <p className="text-center text-gray-500 dark:text-gray-300 mb-4">
              $5/month
            </p>
            <ul className="mb-6">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                Access to community recipes
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                Basic recipe submission
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                Community support
              </li>
            </ul>
            <div className="text-center">
              <Link
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition"
                href="/register"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
              Premium
            </h3>
            <p className="text-center text-gray-500 dark:text-gray-300 mb-4">
              $10/month
            </p>
            <ul className="mb-6">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                All Basic features
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                Advanced recipe submission
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                Exclusive recipes
              </li>
            </ul>
            <div className="text-center">
              <Link
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition"
                href="/register"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* VIP Package */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
              VIP
            </h3>
            <p className="text-center text-gray-500 dark:text-gray-300 mb-4">
              $20/month
            </p>
            <ul className="mb-6">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                All Premium features
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                Personal recipe coach
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                Recipe workshop access
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
                VIP-only events
              </li>
            </ul>
            <div className="text-center">
              <Link
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition"
                href="/register"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Information Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Why Choose Our Membership?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
            Joining our community provides you with access to exclusive
            resources, personalized support, and opportunities to connect with
            fellow food enthusiasts.
          </p>
          <ul className="max-w-3xl mx-auto mb-8">
            <li className="flex items-start mb-4">
              <svg
                className="w-6 h-6 text-orange-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5-5h10l-5 5z" />
              </svg>
              <p>
                Explore a diverse range of recipes tailored to your dietary
                preferences.
              </p>
            </li>
            <li className="flex items-start mb-4">
              <svg
                className="w-6 h-6 text-orange-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5-5h10l-5 5z" />
              </svg>
              <p>
                Receive feedback and tips from our expert community members.
              </p>
            </li>
            <li className="flex items-start mb-4">
              <svg
                className="w-6 h-6 text-orange-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5-5h10l-5 5z" />
              </svg>
              <p>Participate in exclusive workshops and cooking events.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                What is included in each membership?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each membership level offers unique benefits, ranging from
                access to community recipes to personalized coaching.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Can I cancel my membership at any time?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can cancel your membership anytime through your account
                settings.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Are there any discounts for long-term memberships?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer discounts for annual subscriptions. Check our
                pricing page for more details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagePage;
