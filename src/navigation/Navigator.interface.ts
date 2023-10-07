import { StackScreenProps } from "@react-navigation/stack";

export type NavigatorStackParamList = {
  Welcome: undefined;
  Bye: undefined;
};

export type WelcomeScreenProps = StackScreenProps<
  NavigatorStackParamList,
  "Welcome"
>;

export type ByeScreenProps = StackScreenProps<NavigatorStackParamList, "Bye">;

export type NavigatorScreens = "Welcome" | "Bye";
