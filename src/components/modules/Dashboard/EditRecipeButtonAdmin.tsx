"use client";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { FilePenLine } from "lucide-react";
import Link from "next/link";

const EditRecipeButtonAdmin = ({ recipeId }: { recipeId: string }) => {
  return (
    <div className="flex items-center bg-black rounded-full">
      <Tooltip content="Edit  Recipe!">
        <Link href={`/admin/admin-profile/update-recipe/${recipeId}`}>
          <Button className="bg-black text-white" radius="full" size="sm">
            <FilePenLine />
          </Button>
        </Link>
      </Tooltip>
    </div>
  );
};

export default EditRecipeButtonAdmin;
