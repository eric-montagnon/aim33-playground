import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

import { DetailsPage } from "@src/navigation/pages/details/Details.page";
import { SearchPage } from "@src/navigation/pages/search/Search.page";
import SearchIngredientsPage from "@src/navigation/pages/searchIngredients/SearchIngredients.page";
import { WelcomePage } from "@src/navigation/pages/welcome/Welcome.page";
import { NavigatorStackParamList } from "./Navigator.interface";

const Stack = createStackNavigator<NavigatorStackParamList>();

export const Navigator = () => {
  useFocusEffect(() => {
    SplashScreen.hideAsync();
  });
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Search" component={SearchPage} />
      <Stack.Screen
        name="SearchIngredients"
        component={SearchIngredientsPage}
      />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
};
