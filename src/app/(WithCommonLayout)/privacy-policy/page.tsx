import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to the Recipe Sharing Community. Your privacy is important to
          us, and this Privacy Policy explains how we collect, use, and share
          your personal information when you visit or interact with our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">We collect the following types of information:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            Personal Information: When you create an account, we collect
            information like your name, email address, and profile picture.
          </li>
          <li>
            Recipe Details: If you share a recipe, we collect the information
            related to the recipe, including ingredients, instructions, and
            images.
          </li>
          <li>
            Usage Data: We may collect data on how you use our website, such as
            the pages you visit and actions you take within our platform.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use your information to provide and improve our services, such as:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Allowing you to create, share, and discover recipes.</li>
          <li>Improving website functionality and user experience.</li>
          <li>Communicating with you about updates, security, and support.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Information Sharing
        </h2>
        <p className="mb-4">
          We do not share your personal information with third parties except in
          the following cases:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>With your consent.</li>
          <li>To comply with legal obligations.</li>
          <li>
            To protect the rights, property, or safety of our community or the
            public.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We take data security seriously and implement industry-standard
          measures to protect your information. However, please note that no
          data transmission over the internet is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. You can do this through your account settings or by
          contacting us directly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of significant changes by posting a notice on our website or by
          email.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at:
        </p>
        <p className="font-semibold text-gray-800 dark:text-gray-100">
          Email: support@recipescommunity.com
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
