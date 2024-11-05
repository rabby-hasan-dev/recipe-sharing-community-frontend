"use client";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

import { useDeleteRecipe } from "@/src/hooks/receipeHooks";

const EditableRecipeDelelteButton = ({ recipeId }: { recipeId: string }) => {
  const { mutate: deleteRecipe, data } = useDeleteRecipe();
  const handleDelete = () => {
    deleteRecipe(recipeId);
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
    <div className="flex items-center bg-black rounded-full">
      <Tooltip content="Delete  Recipe!">
        <Button
          className="bg-black text-white"
          radius="full"
          size="sm"
          onClick={() => handleDelete()}
        >
          <Trash2 />
        </Button>
      </Tooltip>
    </div>
  );
};

export default EditableRecipeDelelteButton;
