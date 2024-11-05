"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

const FAQSection = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Frequently Asked Questions
        </h2>
        <div className="container mx-auto space-y-5 px-6">
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="User Registration & Account Management"
              title="User Registration & Account Management"
            >
              <div>
                <p>
                  <strong>Q:</strong> How do I create an account?
                </p>
                <p>
                  <strong>A:</strong> You can create an account by clicking the
                  "Sign Up" button on the homepage. Fill out the required
                  details, and you'll receive a confirmation email to activate
                  your account.
                </p>
                <p>
                  <strong>Q:</strong> Can I update my profile information?
                </p>
                <p>
                  <strong>A:</strong> Yes, once logged in, you can navigate to
                  your profile settings to update your information, including
                  username, bio, and profile picture.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Recipe Submission & Management"
              title="Recipe Submission & Management"
            >
              <div>
                <p>
                  <strong>Q:</strong> How can I submit a recipe?
                </p>
                <p>
                  <strong>A:</strong> To submit a recipe, log into your account
                  and go to the "Submit Recipe" section. Fill in the recipe
                  details, including ingredients, steps, and estimated cooking
                  time, and then click "Post."
                </p>
                <p>
                  <strong>Q:</strong> Can I edit or delete my recipe after
                  posting it?
                </p>
                <p>
                  <strong>A:</strong> Yes, you can edit or delete your recipes
                  from your profile's recipe management section.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="Ingredient Checklist & Timer"
              title="Ingredient Checklist & Timer"
            >
              <div>
                <p>
                  <strong>Q:</strong> What is the ingredient checklist feature?
                </p>
                <p>
                  <strong>A:</strong> The ingredient checklist allows you to
                  check off ingredients as you gather them for cooking, making
                  the preparation process easier and more organized.
                </p>
                <p>
                  <strong>Q:</strong> How do I use the cooking timer?
                </p>
                <p>
                  <strong>A:</strong> Each recipe includes an integrated timer
                  that you can start by clicking the "Start Timer" button,
                  allowing you to track cooking time without needing a separate
                  device.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="4"
              aria-label="Social Features (Comments, Ratings, Upvotes)"
              title="Social Features (Comments, Ratings, Upvotes)"
            >
              <div>
                <p>
                  <strong>Q:</strong> How can I rate a recipe?
                </p>
                <p>
                  <strong>A:</strong> You can rate recipes on a scale of 1 to 5
                  stars, helping other users gauge the quality and popularity of
                  a recipe.
                </p>
                <p>
                  <strong>Q:</strong> What is the upvote/downvote system?
                </p>
                <p>
                  <strong>A:</strong> You can upvote recipes you like or find
                  helpful, and downvote ones that might need improvement. The
                  most upvoted recipes appear higher in search results.
                </p>
                <p>
                  <strong>Q:</strong> Can I comment on recipes?
                </p>
                <p>
                  <strong>A:</strong> Yes, you can comment on any recipe to
                  share your thoughts, ask questions, or provide feedback to the
                  recipe author.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="5"
              aria-label="Following & Premium Content"
              title="Following & Premium Content"
            >
              <div>
                <p>
                  <strong>Q:</strong> How can I follow other users?
                </p>
                <p>
                  <strong>A:</strong> You can follow users by visiting their
                  profile and clicking the "Follow" button. This allows you to
                  see their latest recipes and interactions.
                </p>
                <p>
                  <strong>Q:</strong> What are premium features?
                </p>
                <p>
                  <strong>A:</strong> Premium features provide access to
                  exclusive recipes and content not available to free users. You
                  can subscribe via the "Go Premium" section on your profile
                  page.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="6"
              aria-label="Admin Controls & Content Moderation"
              title="Admin Controls & Content Moderation"
            >
              <div>
                <p>
                  <strong>Q:</strong> How does content moderation work?
                </p>
                <p>
                  <strong>A:</strong> Our platform has a dedicated team to
                  review reported content and user activities to ensure a safe
                  and positive environment for everyone.
                </p>
                <p>
                  <strong>Q:</strong> Who can access admin controls?
                </p>
                <p>
                  <strong>A:</strong> Admin controls are limited to authorized
                  personnel who can manage user accounts, moderate recipes, and
                  maintain content quality across the platform.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="7"
              aria-label="Payment & Subscription"
              title="Payment & Subscription"
            >
              <div>
                <p>
                  <strong>Q:</strong> How can I subscribe to premium content?
                </p>
                <p>
                  <strong>A:</strong> You can subscribe through the "Go Premium"
                  section on your profile. Payments are securely processed via
                  Aamarpay or Stripe.
                </p>
                <p>
                  <strong>Q:</strong> Is my payment information secure?
                </p>
                <p>
                  <strong>A:</strong> Yes, all payment information is securely
                  processed through trusted payment gateways to ensure the
                  safety of your data.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem key="8" aria-label="General" title="General">
              <div>
                <p>
                  <strong>Q:</strong> Is the platform free to use?
                </p>
                <p>
                  <strong>A:</strong> Yes, the platform is free to use, but you
                  can choose to access premium content by subscribing.
                </p>
                <p>
                  <strong>Q:</strong> Can I share recipes on social media?
                </p>
                <p>
                  <strong>A:</strong> Yes, each recipe has a share option that
                  allows you to post it on social media platforms.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
          {/* Repeat for more FAQs */}
        </div>
      </section>
    </>
  );
};

export default FAQSection;
