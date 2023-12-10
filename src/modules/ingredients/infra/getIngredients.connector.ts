import { Ingredients } from "@src/modules/ingredients/domain/ingredient.types";
import { adaptIngredients } from "@src/modules/ingredients/infra/getIngredients.adapter";
import { getIngredientsAPI } from "@src/modules/ingredients/infra/getIngredients.api";

type Params = { ingredientName: string };

export const getIngredients = async ({
  ingredientName,
}: Params): Promise<Ingredients> => {
  const ingredientsDto = await getIngredientsAPI(ingredientName);
  return adaptIngredients(ingredientsDto);
};
