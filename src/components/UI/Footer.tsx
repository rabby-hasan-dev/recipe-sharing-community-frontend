import Link from "next/link";

const Footer = () => {
    return (

        <footer className="bg-slate-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 py-8 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm md:text-base">&copy; {new Date().getFullYear()} Recipe Sharing Community. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-center">
                    <Link href="/privacy" className="text-sm md:text-base hover:text-gray-700 dark:hover:text-gray-300 transition">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-sm md:text-base hover:text-gray-700 dark:hover:text-gray-300 transition">
                        Terms of Service
                    </Link>
                    <Link href="/contact" className="text-sm md:text-base hover:text-gray-700 dark:hover:text-gray-300 transition">
                        Contact Us
                    </Link>
                    <Link href="/about" className="text-sm md:text-base hover:text-gray-700 dark:hover:text-gray-300 transition">
                        About Us
                    </Link>
                </div>
            </div>
        </footer>



    );
};

export default Footer;