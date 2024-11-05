import Link from "next/link";
import React from "react";

const CallActionSection = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-6 z-10 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Join Our Community and Share Your Culinary Passion!
          </h2>
          <p className="mb-8 max-w-md mx-auto text-lg leading-relaxed">
            Create, explore, and connect with food lovers from around the world.
          </p>

          <Link
            className="bg-white text-orange-600 hover:text-orange-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-100 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
            href="/register"
          >
            Get Started
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full transform rotate-45" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full transform rotate-45" />
      </section>
    </>
  );
};

export default CallActionSection;
