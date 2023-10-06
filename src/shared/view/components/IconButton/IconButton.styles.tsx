import { ViewStyle } from "react-native";

import { ThemeColor } from "@src/shared/view/theme/colors.types";
import { colors } from "@src/shared/view/theme/colors";
import { IconButtonState } from "@src/shared/view/components/IconButton/IconButton.component";

const defaultContainerStyle: ViewStyle = {
  paddingVertical: 8,
  paddingHorizontal: 16,
  backgroundColor: colors.white,
  flexDirection: "row",
  justifyContent: "center",
};

type IconButtonStyle = Record<
  IconButtonState,
  {
    container: ViewStyle;
    iconColor: (color?: ThemeColor) => ThemeColor;
  }
>;

export const iconButtonStyle: IconButtonStyle = {
  default: {
    container: defaultContainerStyle,
    iconColor: (color?: ThemeColor) => color ?? colors.textNormal,
  },
  disabled: {
    container: defaultContainerStyle,
    iconColor: (_?: ThemeColor) => colors.grey200,
  },
};

type IconButtonWithBorderStyle = Record<
  IconButtonState,
  {
    container: (color?: ThemeColor) => ViewStyle;
  }
>;

export const iconButtonWithBorderStyle: IconButtonWithBorderStyle = {
  default: {
    container: (color?: ThemeColor) => ({
      borderWidth: 1,
      borderRadius: 40,
      borderColor: color ?? colors.textNormal,
    }),
  },
  disabled: {
    container: (_?: ThemeColor) => ({
      borderWidth: 1,
      borderRadius: 40,
      borderColor: colors.grey200,
    }),
  },
};
