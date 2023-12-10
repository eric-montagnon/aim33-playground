import { StackScreenProps } from "@react-navigation/stack";
import { Drink } from "@src/modules/drinks/domain/drink.types";

export type NavigatorStackParamList = {
  Welcome: undefined;
  Search: undefined;
  SearchIngredients: undefined;
  Details: {
    drink: Drink;
  };
};

export type WelcomeScreenProps = StackScreenProps<
  NavigatorStackParamList,
  "Welcome"
>;

export type SearchScreenProps = StackScreenProps<
  NavigatorStackParamList,
  "Search"
>;
export type SearchIngredientsScreenProps = StackScreenProps<
  NavigatorStackParamList,
  "SearchIngredients"
>;

export type DetailsScreenProps = StackScreenProps<
  NavigatorStackParamList,
  "Details"
>;

export type NavigatorScreens =
  | "Welcome"
  | "Search"
  | "SearchIngredients"
  | "Details"; // Added new screen
