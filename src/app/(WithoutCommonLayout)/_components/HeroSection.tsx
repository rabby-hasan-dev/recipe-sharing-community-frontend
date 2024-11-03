

const HeroSection = () => {
    return (
        <section className="relative bg-cover bg-center h-screen  bg-[url('/foodBanner.jpg')] bg-no-repeat "   >
            <div className="absolute inset-0 bg-orange-900 opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover, Share, and Perfect Your Favorite Recipes</h1>
                <p className="text-lg md:text-2xl mb-6">Join our community of home cooks, culinary artists, and food lovers!</p>
                <div className="space-x-4">
                    <a href="#register" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition">Get Started</a>
                    <a href="#recipes" className="bg-white text-orange-500 hover:bg-orange-100 font-semibold py-3 px-6 rounded-md transition">Explore Recipes</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;