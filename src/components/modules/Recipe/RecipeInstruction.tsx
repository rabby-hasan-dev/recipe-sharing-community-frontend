"use client"

import { IRecipe } from '@/src/types/recipe.types';
import React, { useEffect, useState } from 'react';

const RecipeInstruction = ({ recipe }: { recipe: IRecipe }) => {
    const [timeLeft, setTimeLeft] = useState(recipe?.cookingTime);


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
            <h3 className="text-xl font-semibold">Instructions:</h3>
            <p className=" mb-4">Instructions</p>
            <h3 className="text-xl font-semibold">Cooking Timer: {timeLeft}s</h3>
        </div>
    );
};

export default RecipeInstruction;