import styled from "@emotion/native";
import { Ingredient } from "@src/modules/ingredients/domain/ingredient.types";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import React from "react";

type Props = { ingredient: Ingredient };

export const IngredientRowCard = ({ ingredient }: Props) => (
  <Row>
    <Typography.P2 type="bold">{ingredient.name}</Typography.P2>
    <Spacer horizontal={10} />
    <Typography.P2>{ingredient.description}</Typography.P2>
  </Row>
);

const Row = styled.View(({ theme }) => ({
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
