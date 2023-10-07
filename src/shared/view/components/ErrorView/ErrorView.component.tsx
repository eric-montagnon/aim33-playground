import { useTheme } from '@emotion/react';
import React from 'react';

import { Container } from '@src/shared/view/components/ErrorView/ErrorView.styles';

import { Button } from '@src/shared/view/components/Button/Button.component';
import { Spacer } from '@src/shared/view/components/Spacer/Spacer.component';
import { Typography } from '@src/shared/view/components/Typography/Typography.component';

type Props = {
  error: Error;
  onRetry: () => void;
};

export const ErrorView = ({ error, onRetry }: Props) => {
  const theme = useTheme();

  return (
    <Container>
      <Typography.P1>{error.message}</Typography.P1>
      <Spacer vertical={theme.spaces.s} />
      <Button.Primary label="Retry" onPress={onRetry} />
    </Container>
  );
};
