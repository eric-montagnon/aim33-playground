import { WelcomeScreenProps } from "@src/navigation/Navigator.interface";
import { Button } from "@src/shared/view/components/Button/Button.component";
import { ScreenTemplate } from "@src/shared/view/components/ScreenTemplate/ScreenTemplate.component";
import React from "react";
import { Text } from "react-native";

export const WelcomePage = ({ navigation }: WelcomeScreenProps) => {
  return (
    <ScreenTemplate>
      <Text>Welcome</Text>
      <Button.Primary
        label="Go to Bye"
        onPress={() => {
          navigation.navigate("Bye");
        }}
      />
    </ScreenTemplate>
  );
};
