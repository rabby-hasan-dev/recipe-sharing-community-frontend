import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 bg-slate-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm md:text-base">
          &copy; {new Date().getFullYear()} Recipe Sharing Community. All rights
          reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-center">
          <Link
            className="text-sm md:text-base hover:text-gray-700 dark:hover:text-gray-300 transition"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm md:text-base hover:text-gray-700 dark:hover:text-gray-300 transition"
            href="/terms-services"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm md:text-base hover:text-gray-700 dark:hover:text-gray-300 transition"
            href="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="text-sm md:text-base hover:text-gray-700 dark:hover:text-gray-300 transition"
            href="/about"
          >
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
