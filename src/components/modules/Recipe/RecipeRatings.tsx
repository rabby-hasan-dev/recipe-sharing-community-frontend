"use client";
import React, { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Button } from "@nextui-org/button";
import { Rating } from "@smastrom/react-rating";
import { toast } from "sonner";

import { IRecipe } from "@/src/types/recipe.types";
import { useCreateRating } from "@/src/hooks/ratingHooks";

const RecipeRating: React.FC<{ recipe: IRecipe }> = ({ recipe }) => {
  const [userRating, setUserRating] = useState<number>(0);
  const { mutate: creatRating, data } = useCreateRating();
  // Handle rating submission
  const handleRating = (ratingNumber: number) => {
    if (ratingNumber < 1 || ratingNumber > 5) {
      return toast.error("Rating should be between 1 and 5.");
    }
    creatRating({ recipeId: recipe._id, ratingData: { rating: ratingNumber } });
  };

  useEffect(() => {
    if (data && data?.success) {
      toast.success(data?.message as string);
    }
    if (data && !data?.success) {
      toast.error(data?.message as string);
    }
  }, [data]);

  return (
    <div className="border border-gray-300 rounded-lg p-6  mx-auto shadow-lg ">
      {/* Average Rating Display */}
      <h3 className="text-xl font-bold my-5 text-center">Rate this Recipe</h3>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Rating
            readOnly
            style={{ maxWidth: 100 }}
            value={recipe?.averageRating}
          />
          <p className="text-lg font-semibold ">
            {recipe?.averageRating.toFixed(1)} / 5
          </p>
        </div>
        <p className="text-sm ">Total: {recipe?.totalRatings}</p>
      </div>

      {/* Submit Your Rating */}
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Submit Your Rating</h3>
        <Rating
          style={{ maxWidth: 100 }}
          value={userRating}
          onChange={(newValue: number) => setUserRating(newValue)}
        />
        <Button
          className="mt-3 w-full max-w-xs"
          color="primary"
          disabled={userRating === 0}
          onClick={() => handleRating(userRating)}
        >
          Submit Rating
        </Button>
      </div>

      {/* Display user's selected rating */}
      {userRating > 0 && (
        <div className="text-center text-blue-600">
          <p>Your Rating: {userRating} / 5</p>
        </div>
      )}
    </div>
  );
};

export default RecipeRating;
