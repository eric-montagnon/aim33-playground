import { DrinkDTO } from "@src/modules/drinks/infra/drink.dto";

export const getDrinksAPI = async (
  drinkName: string,
): Promise<DrinkDTO[] | undefined> => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName,
  );
  const drinks = (await response.json()).drinks;
  return drinks;
};
