import React, { ReactElement } from 'react';

import { Container } from './StorySubSection.styles';
import { Typography } from '../../components/Typography/Typography.component';

type Props = {
  title: string;
};

export const StorySubSection = ({ title }: Props): ReactElement => {
  return (
    <Container>
      <Typography.Title size={'l'}>{title}</Typography.Title>
    </Container>
  );
};
