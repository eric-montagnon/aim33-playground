import React, { ReactElement } from "react";

import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { Container } from "./StorySection.styles";

type Props = {
  title: string;
};

export const StorySection = ({ title }: Props): ReactElement => {
  return (
    <Container>
      <Typography.Title size="xl">{title}</Typography.Title>
    </Container>
  );
};
