import React from 'react';

const HowItWorkSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h2>
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-8">
                {/* Step 1  */}
                <div className="flex flex-col items-center">
                    <img src="/path-to-icon.svg" alt="Create Account" className="w-16 mb-4" />
                    <h3 className="font-semibold text-gray-700">Create Account</h3>
                    <p className="text-sm text-center text-gray-600">Sign up to access recipes and start sharing your own.</p>
                </div>
                {/* Repeat for each step  */}
            </div>
        </section>

    );
};

export default HowItWorkSection;