import { ViewStyle } from "react-native";

import { ButtonTypographyProps } from "@src/shared/view/components/Button/ButtonTypography.component";
import { colors } from "@src/shared/view/theme/colors";

type ButtonState = "rest" | "disabled" | "active";

export type BaseButtonStyle = Record<
  ButtonState,
  {
    container: ViewStyle;
    text: ButtonTypographyProps["style"];
  }
>;

const defaultContainerStyle: ViewStyle = {
  borderWidth: 1,
  borderRadius: 40,
  paddingVertical: 8,
  paddingHorizontal: 16,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  shadowColor: "black",
  shadowOffset: { height: 2, width: 0 },
  shadowOpacity: 0.3,
  shadowRadius: 2,
};

const defaultTextStyle: ButtonTypographyProps["style"] = {
  type: "bold",
  underlined: false,
};

export const primaryButtonStyle: BaseButtonStyle = {
  rest: {
    container: {
      ...defaultContainerStyle,
      backgroundColor: colors.primary500,
      borderColor: "transparent",
    },
    text: {
      ...defaultTextStyle,
      color: colors.white,
    },
  },
  disabled: {
    container: {
      ...defaultContainerStyle,
      backgroundColor: colors.grey50,
      borderColor: "transparent",
    },
    text: {
      ...defaultTextStyle,
      color: colors.grey300,
    },
  },
  active: {
    container: {
      ...defaultContainerStyle,
      backgroundColor: colors.primary500,
      borderColor: "transparent",
      opacity: 0.5,
    },
    text: { ...defaultTextStyle },
  },
};

export const secondaryButtonStyle: BaseButtonStyle = {
  rest: {
    container: {
      ...defaultContainerStyle,
      backgroundColor: colors.white,
      borderColor: colors.primary500,
    },
    text: {
      ...defaultTextStyle,
      color: colors.primary500,
    },
  },
  disabled: {
    container: {
      ...defaultContainerStyle,
      backgroundColor: colors.grey50,
      borderColor: colors.grey300,
    },
    text: {
      ...defaultTextStyle,
      color: colors.grey300,
    },
  },
  active: {
    container: {
      ...defaultContainerStyle,
      backgroundColor: "transparent",
      borderColor: colors.primary500,
      opacity: 0.5,
    },
    text: {
      ...defaultTextStyle,
      color: colors.primary500,
    },
  },
};

export const tertiaryButtonStyle: BaseButtonStyle = {
  rest: {
    container: {
      ...defaultContainerStyle,
      shadowOpacity: 0,
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    text: {
      ...defaultTextStyle,
      color: colors.primary500,
      underlined: true,
    },
  },
  disabled: {
    container: {
      ...defaultContainerStyle,
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    text: {
      ...defaultTextStyle,
      underlined: true,
      color: colors.grey300,
    },
  },
  active: {
    container: {
      ...defaultContainerStyle,
      backgroundColor: "transparent",
      borderColor: "transparent",
      opacity: 0.5,
    },
    text: {
      ...defaultTextStyle,
      color: colors.primary500,
      underlined: true,
    },
  },
};
