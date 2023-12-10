import { getIngredients } from "@src/modules/ingredients/infra/getIngredients.connector";
import { useQuery } from "@tanstack/react-query";

interface UseGetIngredientsParams {
  ingredientName: string;
}

export const useGetIngredients = ({
  ingredientName,
}: UseGetIngredientsParams) => {
  return useQuery(
    ["ingredients", ingredientName],
    () => getIngredients({ ingredientName }),
    {
      suspense: false,
    },
  );
};
