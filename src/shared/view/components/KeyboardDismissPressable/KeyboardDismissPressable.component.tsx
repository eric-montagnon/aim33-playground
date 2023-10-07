import React, { ReactNode } from 'react';
import { Keyboard } from 'react-native';

import { KeyboardDismissPressable as KeyboardDismisser } from '@src/shared/view/components/KeyboardDismissPressable/KeyboardDismissPressable.styles';
type KeyboardDismissPressableProps = {
  children: ReactNode;
};
export const KeyboardDismissPressable = ({
  children,
}: KeyboardDismissPressableProps) => {
  return (
    <KeyboardDismisser onPress={Keyboard.dismiss}>{children}</KeyboardDismisser>
  );
};
