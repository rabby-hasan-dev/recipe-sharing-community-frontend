"use client";

import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { usePublishRecipe } from "@/src/hooks/adminHooks";
import { useDeleteRecipe } from "@/src/hooks/receipeHooks";
import { IRecipe } from "@/src/types/recipe.types";

const RecipeTable = ({ recipes }: { recipes: IRecipe[] }) => {
  const { mutate: deleteRecipe } = useDeleteRecipe();
  const { mutate: publishReipe } = usePublishRecipe();
  const handleDeleteRecipe = (recipeId: string) => {
    deleteRecipe(recipeId);
  };

  const handlePublishRecipe = (recipeId: string) => {
    publishReipe({ recipeId: recipeId });
  };

  return (
    <div className="p-6">
      <Table
        aria-label="Recipe management table"
        style={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Author</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Publish/UnPublish</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {recipes?.map((recipe: IRecipe, index) => {
            return (
              <TableRow key={recipe._id + index}>
                <TableCell>{recipe?.title}</TableCell>
                <TableCell>{recipe?.author?.username}</TableCell>
                <TableCell>
                  <p>{recipe.isPremium === true ? "Premium" : "Freemium"}</p>
                </TableCell>
                <TableCell>
                  <Switch
                    key={recipe._id + index}
                    isSelected={recipe?.isPublished}
                    onValueChange={() => handlePublishRecipe(recipe._id)}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDeleteRecipe(recipe._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecipeTable;
