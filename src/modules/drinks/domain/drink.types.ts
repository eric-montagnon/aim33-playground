type DrinkIngredient = {
  name?: string;
  quantity?: string;
};

export type Drink = {
  id: number;
  name: string;
  thumb: string;
  category: string;
  instructions: string;
  ingredients: DrinkIngredient[];
};

export type Drinks = Array<Drink>;
