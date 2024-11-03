import React from 'react';

const MembershipSection = () => {
    return (

        <section className="py-16 text-center bg-gradient-to-r from-green-500 to-green-700 text-white">
            <h2 className="text-3xl font-semibold mb-6">Upgrade to Premium</h2>
            <p className="mb-6 text-lg">Access exclusive recipes, advanced filters, and an ad-free experience.</p>
            <a href="#" className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100">Get Premium</a>
        </section>
    );
};

export default MembershipSection;