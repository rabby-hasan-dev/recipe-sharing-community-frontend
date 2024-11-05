"use client";

import { useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Star } from "lucide-react";

export function Rating({
  averageRating,

}: {
  averageRating: number;

}) {
  const [rating, setRating] = useState(averageRating || 0); // Set the default rating to averageRating

  // Declare it outside your component so it doesn't get re-created
  const myStyles = {
    itemShapes: <Star />,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <div className="flex rounded bg-black/30 p-2 text-2xl font-medium text-white">
      <ReactRating
        itemStyles={myStyles}
        style={{ maxWidth: 100 }}
        value={rating}
        onChange={setRating}
      />
    </div>
  );
}
