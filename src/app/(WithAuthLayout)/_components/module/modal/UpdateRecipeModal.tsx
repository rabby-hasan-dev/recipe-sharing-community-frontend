
'use client';
import { Edit, PlusIcon } from "lucide-react";
import RSModal from "@/src/components/modal/RSModal";
import { Button } from "@nextui-org/button";
import { Plus, TrashIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, FormProvider, SubmitHandler, useFieldArray, useForm, } from "react-hook-form";
import { toast } from "sonner";
import RSInput from "@/src/components/form/RSInput";
import { useGetSingleRecipe, useUpdateRecipe } from "@/src/hooks/receipeHooks";
import { Spinner } from "@nextui-org/spinner";

const UpdateRecipeModal = ({ recipeId }: { recipeId: string }) => {

    const [imageFiles, setImageFiles] = useState<File[] | []>([])
    const [imagePreviews, setImagePreviews] = useState<string[] | []>([])

    const methods = useForm();
    const { control, handleSubmit } = methods;
    const { mutate: handleUpdateRecipe, isPending: UpdateRecipePending, isSuccess, data } = useUpdateRecipe();
    const { data: singleRecipe, } = useGetSingleRecipe(recipeId);
    console.log(singleRecipe);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients",
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        console.log(data)

        const formData = new FormData();

        const recipeData = {
            ...data,
            cookingTime: Number(data?.cookingTime),
            ingredients: data?.ingredients?.map((ingre: { value: string }) => ingre.value),

        };

        formData.append('data', JSON.stringify(recipeData));

        for (let image of imageFiles) {
            formData.append('file', image)
        }

        handleUpdateRecipe({ recipeId: "ff", recipeData: formData });

    };


    const handleFieldAppend = () => {
        append({ name: "ingredients" });
    };


    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files![0];
        setImageFiles((prev) => [...prev, files])

        if (files) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews((prev) => [...prev, reader.result as string])
            }

            reader.readAsDataURL(files);
        }


    }

    useEffect(() => {

        if (data && data?.success) {
            toast.success(data?.message as string);
        }
        if (data && !data?.success) {
            toast.error(data?.message as string);
        }

    }, [isSuccess, data]);





    return (

        <RSModal
            buttonText={<Edit />}
            title="Create Recipe"
            buttonIsIconOnly={true}
            buttonVariant="faded"
            buttonSize="sm"
        >



            <FormProvider {...methods}>


                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mb-5"
                >
                    {/* Title */}
                    <div className="mb-6">
                        <RSInput
                            size="sm"
                            name="title"
                            label="Recipe Title"
                            type="text"
                            placeholder="Enter the recipe title"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <RSInput
                            size="sm"
                            name="description"
                            label="Recipe Description"
                            type="textarea"
                            placeholder="Describe the recipe"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-6">
                        <label
                            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition duration-150"
                            htmlFor="image"
                        >
                            Upload Image
                        </label>
                        <input
                            multiple
                            className="hidden"
                            id="image"
                            type="file"
                            onChange={(e) => handleImageChange(e)}
                        />
                    </div>

                    {/* Image Previews */}
                    <div className="flex gap-4 mb-6 flex-wrap">
                        {imagePreviews?.length > 0 &&
                            imagePreviews.map((url) => (
                                <div
                                    key={url}
                                    className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 p-2"
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src={url}
                                        alt="preview"
                                    />
                                </div>
                            ))}
                    </div>

                    {/* ingredients */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-xl font-medium text-gray-800 dark:text-white">List the ingredients</h1>
                            <Button
                                size="sm"
                                isIconOnly
                                onClick={() => handleFieldAppend()}
                                className="bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                            >
                                <Plus className="text-white" />
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {fields.map((field, index) => (
                                <div key={field.id} className="flex items-center gap-3">
                                    <RSInput
                                        size="sm"
                                        label="Ingredient"
                                        name={`ingredients.${index}.value`}
                                        placeholder="Enter ingredient"
                                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                    />
                                    <Button
                                        size="sm"
                                        isIconOnly
                                        className=" bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md dark:bg-red-600 dark:hover:bg-red-700"
                                        onClick={() => remove(index)}
                                    >
                                        <TrashIcon className="text-white" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cooking Time */}
                    <div className="mb-6">
                        <RSInput
                            size="sm"
                            name="cookingTime"
                            label="Cooking Time (Minutes)"
                            type="number"
                            placeholder="Enter the cooking time in minutes"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                    </div>

                    {/* Is Premium */}
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600 dark:text-indigo-400"
                            name="isPremium"
                        />
                        <label className="ml-2 text-gray-700 dark:text-gray-300 font-medium">Premium Recipe</label>
                    </div>

                    {/* Is Published */}
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600 dark:text-indigo-400"
                            name="isPublished"
                        />
                        <label className="ml-2 text-gray-700 dark:text-gray-300 font-medium">Publish Recipe</label>
                    </div>

                    {/* Submit Button */}
                    <Button
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-150 dark:bg-blue-700 dark:hover:bg-blue-800"
                        size="md"
                        type="submit"
                    >
                        {
                            UpdateRecipePending && !isSuccess ? <><Spinner size="sm" /> <span>  Recipe Uploding ...</span></> : <span>Uplaod Recipe</span>
                        }
                    </Button>
                </form>
            </FormProvider>



        </RSModal>









    );
};

export default UpdateRecipeModal;
