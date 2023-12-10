import { getDrinks } from "@src/modules/drinks/infra/getDrinks.connector";
import { useQuery } from "@tanstack/react-query";

interface UseGetDrinksParams {
  drinkName: string;
}

export const useGetDrinks = ({ drinkName }: UseGetDrinksParams) => {
  return useQuery(["drinks", drinkName], () => getDrinks({ drinkName }), {
    suspense: false,
  });
};
