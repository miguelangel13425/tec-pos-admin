import { Ingredient } from "./ingredients.model";

export interface Dish {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  price: number;
  image: string;
}
