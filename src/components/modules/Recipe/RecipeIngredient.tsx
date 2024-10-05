"use client"

import React, { useEffect, useState } from 'react';

const RecipeIngredient = ({ recipe }: { recipe: number }) => {
    const [timeLeft, setTimeLeft] = useState(recipe?.cookingTime as number);


    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(prev => prev - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);



    return (
        <div>
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
            ))}
        </div>
    );
};

export default RecipeIngredient;