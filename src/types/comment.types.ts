import { IRecipe } from "./recipe.types";

import { IUser } from ".";

export interface IComment {
  _id: string;
  userId: IUser;
  recipeId: IRecipe;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
