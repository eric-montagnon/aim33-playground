import { useTheme } from "@emotion/react";
import React from "react";
import { ActivityIndicator } from "react-native";

import { Container } from "@src/shared/view/components/LoaderView/LoaderView.styles";

export const LoaderView = () => {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary500}
        testID="activity-indicator"
      />
    </Container>
  );
};
