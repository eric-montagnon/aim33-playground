import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from '@src/navigation/Navigator.navigator';
import { fontFiles } from '@src/shared/view/theme/fonts';
import { theme } from '@src/shared/view/theme/theme';
import { useFonts } from 'expo-font';
import { StyleSheet, Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts(fontFiles);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <Navigator/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
