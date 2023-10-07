import { ByeScreenProps } from "@src/navigation/Navigator.interface";
import { Button } from "@src/shared/view/components/Button/Button.component";
import { ScreenTemplate } from "@src/shared/view/components/ScreenTemplate/ScreenTemplate.component";
import React from "react";
import { Text } from "react-native";

export const ByePage = ({ navigation }: ByeScreenProps) => {
  return (
    <ScreenTemplate>
      <Text>Bye</Text>
      <Button.Primary
        label="Go to Welcome"
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      />
    </ScreenTemplate>
  );
};
