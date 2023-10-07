import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import React from "react";
import { View } from "react-native";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { ThemeColor } from "@src/shared/view/theme/colors.types";

export const InputBox = styled.TextInput(({ theme }) => ({
  flex: 1,
  color: theme.colors.textNormal,
  fontFamily: theme.fonts.paragraph.p1.regular.fontFamily,
  fontSize: theme.fonts.paragraph.p1.regular.fontSize,
}));

type LabelProps = {
  label: string;
  labelColor: ThemeColor;
  nativeId: string;
};

export const Label = ({ label, labelColor, nativeId }: LabelProps) => {
  const theme = useTheme();

  return (
    <View>
      <Typography.P1 color={labelColor} nativeID={nativeId} accessible={false}>
        {label}
      </Typography.P1>
      <Spacer vertical={theme.spaces.xs} />
    </View>
  );
};
