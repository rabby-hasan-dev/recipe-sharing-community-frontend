'use client';

import RSForm from "@/src/components/form/RSForm";
import RSInput from "@/src/components/form/RSInput";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler, } from "react-hook-form";

const RecipeForm = () => {


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold">Create a New Recipe</h2>

            <div className="w-full max-w-3xl">
                <RSForm
                    onSubmit={onSubmit}
                >
                    {/* Title */}
                    <div className="mb-4">
                        <RSInput
                            name="title"
                            label="Recipe Title"
                            type="text"
                            placeholder="Enter the recipe title"

                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <RSInput
                            name="description"
                            label="Recipe Description"
                            type="textarea"
                            placeholder="Describe the recipe"

                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-4">
                        <RSInput
                            name="image"
                            label="Image URL"
                            type="text"
                            placeholder="Provide an image URL"

                        />
                    </div>

                    {/* Ingredients */}
                    <div className="mb-4">
                        <RSInput
                            name="ingredients"
                            label="Ingredients"
                            type="textarea"
                            placeholder="List the ingredients (comma separated)"

                        />
                    </div>

                    {/* Cooking Time */}
                    <div className="mb-4">
                        <RSInput
                            name="cookingTime"
                            label="Cooking Time (Minutes)"
                            type="number"
                            placeholder="Enter the cooking time in minutes"

                        />
                    </div>

                    {/* Is Premium */}
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-indigo-600"
                                name="isPremium"
                            />
                            <span className="ml-2">Premium Recipe</span>
                        </label>
                    </div>
                    {/* Is Published */}
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-indigo-600"
                                name="isPublished"
                            />
                            <span className="ml-2">Publish Recipe</span>
                        </label>
                    </div>

                    <Button
                        className="w-full rounded-md bg-default-900 font-semibold text-default"
                        size="lg"
                        type="submit"
                    >
                        Submit Recipe
                    </Button>
                </RSForm>
            </div>
        </div>
    );
};

export default RecipeForm;
