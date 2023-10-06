import { useTheme } from '@emotion/react';
import React from 'react';
import { ReactNode } from 'react';

import * as S from './StoryPage.styles';

type Props = {
  background?: 'grey' | 'default';
  children: ReactNode;
};

export const StoryPage = ({ children, background = 'default' }: Props) => {
  const theme = useTheme();
  return (
    <S.Container
      contentContainerStyle={{ paddingBottom: theme.spaces.xxl }}
      background={background}
    >
      {children}
    </S.Container>
  );
};
