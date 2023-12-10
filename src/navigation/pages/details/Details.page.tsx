import styled from "@emotion/native";
import { DetailsScreenProps } from "@src/navigation/Navigator.interface";
import { Button } from "@src/shared/view/components/Button/Button.component";
import { ScreenTemplate } from "@src/shared/view/components/ScreenTemplate/ScreenTemplate.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import React from "react";

export const DetailsPage = ({ navigation, route }: DetailsScreenProps) => {
  const drink = route.params?.drink;

  return (
    <ScreenTemplate>
      <Container>
        <DrinkImage
          source={{
            uri: drink.thumb,
          }}
        />
        <Spacer vertical={20} />
        <Description>
          <Typography.P1 type="bold" color="#FFFFFF">
            {drink.name}
          </Typography.P1>
          <Spacer vertical={20} />
          {drink.ingredients.map((ingredient, index) => {
            return ingredient.name ? (
              <Typography.P2
                type="bold"
                color="#FFFFFF"
                key={`${ingredient.name} ${index}`}
              >
                {ingredient.name} - {ingredient.quantity}
              </Typography.P2>
            ) : null;
          })}
          <Spacer vertical={20} />
          <Typography.P2 type="bold" color="#FFFFFF">
            {drink.instructions}
          </Typography.P2>
        </Description>
        <Spacer vertical={20} />
        <Description>
          <Button.Primary
            label="Go Back"
            onPress={() => {
              navigation.navigate("Search");
            }}
          />
        </Description>
      </Container>
    </ScreenTemplate>
  );
};

const DrinkImage = styled.Image(() => ({
  width: "100%",
  height: 300,
}));

const Container = styled.View(({ theme }) => ({
  flexShrink: 1,
  width: "100%",
  minHeight: "100%",
  overflow: "hidden",
  backgroundColor: theme.colors.secondary500,
  borderRadius: 20,
  shadowColor: theme.colors.black,
  shadowRadius: theme.spaces.xxs,
  shadowOffset: {
    height: 3,
    width: 0,
  },
  shadowOpacity: 0.3,
}));

const Description = styled.View(() => ({
  paddingHorizontal: 20,
}));
