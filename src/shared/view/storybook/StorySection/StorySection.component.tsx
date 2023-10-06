import React, { ReactElement } from 'react';

import { Container } from './StorySection.styles';
import { Typography } from '../../components/Typography/Typography.component';

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
