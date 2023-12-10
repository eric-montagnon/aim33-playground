import { Drinks } from "@src/modules/drinks/domain/drink.types";
import { DrinkDTO } from "@src/modules/drinks/infra/drink.dto";

export const adaptDrinks = (drinks: DrinkDTO[] | undefined): Drinks => {
  if (!drinks) {
    return [];
  }
  return drinks.map((drink) => {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      thumb: drink.strDrinkThumb,
      category: drink.strCategory,
      instructions: drink.strInstructions,
      ingredients: [
        { name: drink.strIngredient1, quantity: drink.strMeasure1 },
        { name: drink.strIngredient2, quantity: drink.strMeasure2 },
        { name: drink.strIngredient3, quantity: drink.strMeasure3 },
        { name: drink.strIngredient4, quantity: drink.strMeasure4 },
        { name: drink.strIngredient5, quantity: drink.strMeasure5 },
        { name: drink.strIngredient6, quantity: drink.strMeasure6 },
        { name: drink.strIngredient7, quantity: drink.strMeasure7 },
        { name: drink.strIngredient8, quantity: drink.strMeasure8 },
      ],
    };
  });
};
