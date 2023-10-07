import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "@src/navigation/Navigator.navigator";
import { fontFiles } from "@src/shared/view/theme/fonts";
import { theme } from "@src/shared/view/theme/theme";
import { useFonts } from "expo-font";
import React from "react";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts(fontFiles);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
