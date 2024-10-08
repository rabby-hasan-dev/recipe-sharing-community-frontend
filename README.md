# Recipe Sharing Community - Frontend Documentation

## Project Overview

The Recipe Sharing Community is a full-stack web application where users can share, discover, and manage recipes. The platform allows users to submit recipes, interact with ingredient checklists, use a cooking timer, and engage with the community through comments, ratings, and upvotes/downvotes.

### Key Features:
- **User registration and login** with JWT authentication
- **Recipe management** (create, update, delete)
- **Ingredient checklists** and cooking timers
- **Social features** (follow users, comments, ratings, upvote/downvote system)
- **Premium content** for subscribed users
- **Search and filter** functionality for recipes
- **Infinite scroll** for recipe feed

---


## Key Components

### 1. **Authentication**
- **LoginPage.js**: Allows users to log in with JWT authentication.
- **RegisterPage.js**: Allows users to create an account.

### 2. **Recipe Management**
- **RecipeCard.js**: Displays individual recipe details.
- **RecipeForm.js**: Form for submitting or updating recipes.
- **IngredientChecklist.js**: Interactive ingredient checklist for users.
- **CookingTimer.js**: Built-in timer for cooking durations.

### 3. **Social Features**
- **FollowButton.js**: Allows users to follow or unfollow others.
- **CommentSection.js**: Enables commenting on recipes.
- **UpvoteDownvote.js**: Lets users upvote or downvote recipes.

### 4. **Admin Features**
- **AdminDashboard.js**: Admin view for managing recipes and users.

---

## Functionality

### Authentication & Authorization
- **JWT-based login**: Secure user authentication and token-based sessions.
- **Password reset**: Users can reset their password via email.

### Recipe Management
- Users can **submit**, **update**, and **delete** recipes.
- Recipe details page includes **ingredient checklists** and **cooking timers**.

### Social Features
- Users can **follow/unfollow** others and see follower/following counts.
- **Commenting** and **rating** options for each recipe.
- **Upvote/downvote** system to rank recipes based on popularity.

### Premium Membership
- Subscription system via **AAMARPAY/Stripe** for premium content access.

### Search & Filter
- **Advanced search** to find recipes by ingredients, cooking times, etc.
- **Infinite scroll** for seamless recipe browsing.

---

## Libraries and Tools
- **NextJs**: Frontend library for building UI components.
- **Next Js App Router**: Routing for navigation between pages.
- **Axios**: API calls to the backend server.
- **React Hook Form**: For handling forms.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **JWT**: For secure user authentication.
- **AMARPAY**: For handling premium membership payments.

---

## 2. Install Dependencies

-  cd recipe-sharing-community-frontend
-  yarn install
## 3. Environment Variables
Create a .env file in the root directory and add the following:

-  NEXT_PUBLIC_BASE_API=http://localhost:5000/api   # Backend API URL
## 4. Run the Development Server
Start the app in development mode:
-  yarn dev