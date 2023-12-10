import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "@src/navigation/Navigator.navigator";
import { queryClient } from "@src/shared/infra/clients/queryClient";
import { QueryBoundaries } from "@src/shared/view/components/QueryBoundaries/QueryBoundaries.component";
import { fontFiles } from "@src/shared/view/theme/fonts";
import { theme } from "@src/shared/view/theme/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import React from "react";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts(fontFiles);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer fallback={<Text>Loading...</Text>}>
          <QueryBoundaries>
            <Navigator />
          </QueryBoundaries>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
