import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center  h-[70vh]   bg-[url('/foodBanner.jpg')] bg-no-repeat ">
      <div className="absolute inset-0 bg-orange-900 opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover, Share, and Perfect Your Favorite Recipes
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Join our community of home cooks, culinary artists, and food lovers!
        </p>
        <div className="space-x-4">
          <Link
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
            href="/register"
          >
            Get Started
          </Link>
          <Link
            className="bg-white text-orange-500 hover:bg-orange-100 font-semibold py-3 px-6 rounded-md transition"
            href="/recipe-feeds"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
