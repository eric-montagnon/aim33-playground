import styled from "@emotion/native";
import { Drink } from "@src/modules/drinks/domain/drink.types";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import React from "react";

type Props = { drink: Drink; onPress: () => void };

export const DrinkRowCard = ({ drink, onPress }: Props) => (
  <Row onPress={onPress}>
    <DrinkImage
      source={{
        uri: drink.thumb,
      }}
    />
    <Spacer horizontal={10} />
    <Typography.P2 type="bold">{drink.name}</Typography.P2>
  </Row>
);

const Row = styled.Pressable(({ theme }) => ({
  flexDirection: "row",
  backgroundColor: theme.colors.white,
  padding: 10,
  borderRadius: 10,
  shadowColor: theme.colors.black,
  shadowRadius: theme.spaces.xxs,
  shadowOffset: {
    height: 3,
    width: 0,
  },
  shadowOpacity: 0.3,
}));

const DrinkImage = styled.Image(() => ({
  borderRadius: 10,
  width: 70,
  height: 70,
}));
