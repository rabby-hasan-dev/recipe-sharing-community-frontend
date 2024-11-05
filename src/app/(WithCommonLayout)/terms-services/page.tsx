import React from 'react';

const TermsOfServicePage = () => {
    return (
        <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
                <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
                <p className="mb-4">
                    Welcome to the Recipe Sharing Community. By using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing and using this website, you accept and agree to be bound by these terms. If you do not agree with any part of these terms, you may not use our services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Conduct</h2>
                <p className="mb-4">
                    You agree to use the website responsibly and not to engage in any activities that may disrupt or harm the platform or its users. Prohibited activities include:
                </p>
                <ul className="list-disc list-inside ml-4 mb-4">
                    <li>Posting or sharing illegal, harmful, or offensive content.</li>
                    <li>Attempting to gain unauthorized access to the site or other user accounts.</li>
                    <li>Harassing or violating the privacy of other users.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Content Ownership</h2>
                <p className="mb-4">
                    By sharing recipes, images, or other content, you grant us a non-exclusive, royalty-free license to display and promote your content on our platform. You retain ownership rights but allow us to use your content for the purpose of promoting the site.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Account Responsibility</h2>
                <p className="mb-4">
                    You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Notify us immediately if you suspect unauthorized use of your account.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Termination of Service</h2>
                <p className="mb-4">
                    We reserve the right to terminate or suspend your account at our discretion if we believe you have violated these terms or engaged in unlawful activities.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="mb-4">
                    Our platform is provided "as is," and we make no warranties regarding the site's performance or availability. We are not liable for any damages arising from the use of our site, including direct, indirect, incidental, or consequential damages.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
                <p className="mb-4">
                    We may update these Terms of Service from time to time. You are encouraged to review this page periodically. Your continued use of the platform after changes are posted constitutes your acceptance of the new terms.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                    Email: support@recipescommunity.com
                </p>
            </div>
        </section>
    );
};

export default TermsOfServicePage;
