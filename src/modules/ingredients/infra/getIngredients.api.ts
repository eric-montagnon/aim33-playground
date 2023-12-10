import { IngredientsDTO } from "@src/modules/ingredients/infra/ingredients.dto";

export const getIngredientsAPI = async (
  ingredientName: string,
): Promise<IngredientsDTO[] | undefined> => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" +
      ingredientName,
  );
  const ingredients = (await response.json()).ingredients;
  return ingredients;
};
