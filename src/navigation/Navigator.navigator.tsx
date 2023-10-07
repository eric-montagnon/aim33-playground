import { useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';


import { ByePage } from '@src/navigation/pages/bye/Bye.page';
import { WelcomePage } from '@src/navigation/pages/welcome/Welcome.page';
import { NavigatorStackParamList } from './Navigator.interface';

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
      <Stack.Screen name="Bye" component={ByePage} />
    </Stack.Navigator>
  );
};
