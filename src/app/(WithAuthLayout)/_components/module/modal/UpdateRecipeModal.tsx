"use client";
import { Edit } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Plus, TrashIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { Spinner } from "@nextui-org/spinner";

import RSInput from "@/src/components/form/RSInput";
import { useGetSingleRecipe, useUpdateRecipe } from "@/src/hooks/receipeHooks";
import RSModal from "@/src/components/modal/RSModal";

const UpdateRecipeModal = ({ recipeId }: { recipeId: string }) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const methods = useForm();
  const { control, handleSubmit } = methods;
  const {
    mutate: handleUpdateRecipe,
    isPending: UpdateRecipePending,
    isSuccess,
    data,
  } = useUpdateRecipe();
  const { data: singleRecipe } = useGetSingleRecipe(recipeId);

  console.log(singleRecipe);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    const formData = new FormData();

    const recipeData = {
      ...data,
      cookingTime: Number(data?.cookingTime),
      ingredients: data?.ingredients?.map(
        (ingre: { value: string }) => ingre.value,
      ),
    };

    formData.append("data", JSON.stringify(recipeData));

    for (let image of imageFiles) {
      formData.append("file", image);
    }

    handleUpdateRecipe({ recipeId: "ff", recipeData: formData });
  };

  const handleFieldAppend = () => {
    append({ name: "ingredients" });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files![0];

    setImageFiles((prev) => [...prev, files]);

    if (files) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(files);
    }
  };

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
      buttonIsIconOnly={true}
      buttonSize="sm"
      buttonText={<Edit />}
      buttonVariant="faded"
      title="Create Recipe"
    >
      <FormProvider {...methods}>
        <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div className="mb-6">
            <RSInput
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              label="Recipe Title"
              name="title"
              placeholder="Enter the recipe title"
              size="sm"
              type="text"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <RSInput
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              label="Recipe Description"
              name="description"
              placeholder="Describe the recipe"
              size="sm"
              type="textarea"
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
                    alt="preview"
                    className="object-cover w-full h-full"
                    src={url}
                  />
                </div>
              ))}
          </div>

          {/* ingredients */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-medium text-gray-800 dark:text-white">
                List the ingredients
              </h1>
              <Button
                isIconOnly
                className="bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                size="sm"
                onClick={() => handleFieldAppend()}
              >
                <Plus className="text-white" />
              </Button>
            </div>

            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-3">
                  <RSInput
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    label="Ingredient"
                    name={`ingredients.${index}.value`}
                    placeholder="Enter ingredient"
                    size="sm"
                  />
                  <Button
                    isIconOnly
                    className=" bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md dark:bg-red-600 dark:hover:bg-red-700"
                    size="sm"
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
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              label="Cooking Time (Minutes)"
              name="cookingTime"
              placeholder="Enter the cooking time in minutes"
              size="sm"
              type="number"
            />
          </div>

          {/* Is Premium */}
          <div className="mb-6 flex items-center">
            <input
              className="form-checkbox text-indigo-600 dark:text-indigo-400"
              name="isPremium"
              type="checkbox"
            />
            <label className="ml-2 text-gray-700 dark:text-gray-300 font-medium">
              Premium Recipe
            </label>
          </div>

          {/* Is Published */}
          <div className="mb-6 flex items-center">
            <input
              className="form-checkbox text-indigo-600 dark:text-indigo-400"
              name="isPublished"
              type="checkbox"
            />
            <label className="ml-2 text-gray-700 dark:text-gray-300 font-medium">
              Publish Recipe
            </label>
          </div>

          {/* Submit Button */}
          <Button
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-150 dark:bg-blue-700 dark:hover:bg-blue-800"
            size="md"
            type="submit"
          >
            {UpdateRecipePending && !isSuccess ? (
              <>
                <Spinner size="sm" /> <span> Recipe Uploding ...</span>
              </>
            ) : (
              <span>Uplaod Recipe</span>
            )}
          </Button>
        </form>
      </FormProvider>
    </RSModal>
  );
};

export default UpdateRecipeModal;
