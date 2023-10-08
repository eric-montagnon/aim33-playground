import { Drink } from "@src/modules/drinks/Drink.type";

export async function getDrinksByName(
  text: string,
  setData: React.Dispatch<React.SetStateAction<Drink[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + text,
    );
    const json = await response.json();
    setData(json.drinks);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}
