import Link from 'next/link';
import React from 'react';

const CallActionSection = () => {
    return (
        <section className="bg-orange-500 py-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Community and Share Your Culinary Passion!</h2>
            <p className="mb-6">Create, explore, and connect with food lovers from around the world.</p>
            <Link href="#register" className="bg-white text-orange-500 hover:bg-orange-100 font-semibold py-3 px-6 rounded-md transition">Get Started</Link>
        </section>

    );
};

export default CallActionSection;