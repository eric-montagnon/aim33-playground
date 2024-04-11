import { Drinks } from "@src/modules/drinks/domain/drink.types";
import { adaptDrinks } from "@src/modules/drinks/infra/getDrinks.adapter";
import { getDrinksAPI } from "@src/modules/drinks/infra/getDrinks.api";

type Params = { drinkName: string };

export const getDrinks = async ({ drinkName }: Params): Promise<Drinks> => {
  console.log("bonjour");
  const drinksDto = await getDrinksAPI(drinkName);
  return adaptDrinks(drinksDto);
};
