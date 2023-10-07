import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import React, { ReactElement } from "react";
import { Container } from "./StorySubSection.styles";

type Props = {
  title: string;
};

export const StorySubSection = ({ title }: Props): ReactElement => {
  return (
    <Container>
      <Typography.Title size={"l"}>{title}</Typography.Title>
    </Container>
  );
};
