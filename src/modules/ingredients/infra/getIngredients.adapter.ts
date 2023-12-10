import { Ingredients } from "@src/modules/ingredients/domain/ingredient.types";
import { IngredientsDTO } from "@src/modules/ingredients/infra/ingredients.dto";

export const adaptIngredients = (
  ingredients: IngredientsDTO[] | undefined,
): Ingredients => {
  if (!ingredients) {
    return [];
  }
  return ingredients.map((ingredient) => {
    return {
      id: ingredient.idIngredient,
      name: ingredient.strIngredient,
      description: ingredient.strDescription,
    };
  });
};
