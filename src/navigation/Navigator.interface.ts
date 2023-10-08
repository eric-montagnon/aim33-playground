import { StackScreenProps } from "@react-navigation/stack";
import { Drink } from "@src/modules/drinks/Drink.type";

export type NavigatorStackParamList = {
  Welcome: undefined;
  Search: undefined;
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

export type DetailsScreenProps = StackScreenProps<
  NavigatorStackParamList,
  "Details"
>;

export type NavigatorScreens = "Welcome" | "Search" | "Details";
