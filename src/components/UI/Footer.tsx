
const Footer = () => {
    return (
        <footer className="bg-slate-100 text-gray-500 py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Recipe Sharing Community. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;