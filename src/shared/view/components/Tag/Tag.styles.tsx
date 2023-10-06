import { ViewStyle } from "react-native";

import { colors } from "@src/shared/view/theme/colors";
import { ThemeColor } from "@src/shared/view/theme/colors.types";

import { TagVariant } from "./Tag.component";

const defaultContainerStyle: ViewStyle = {
  borderWidth: 1,
  borderRadius: 40,
  padding: 8,
  alignItems: "center",
  flexDirection: "row",
  alignSelf: "flex-start",
};

type TagStyle = Record<
  TagVariant,
  {
    containerStyle: ViewStyle;
    iconStyle: { color: ThemeColor };
    textStyle: { color: ThemeColor };
  }
>;

export const tagStyle: TagStyle = {
  valid: {
    containerStyle: {
      ...defaultContainerStyle,
      backgroundColor: colors.white,
      borderColor: colors.statusSuccess,
    },
    iconStyle: {
      color: colors.statusSuccess,
    },
    textStyle: {
      color: colors.statusSuccess,
    },
  },
  error: {
    containerStyle: {
      ...defaultContainerStyle,
      backgroundColor: colors.white,
      borderColor: colors.statusError,
    },
    iconStyle: {
      color: colors.statusError,
    },
    textStyle: {
      color: colors.statusError,
    },
  },
  disabled: {
    containerStyle: {
      ...defaultContainerStyle,
      backgroundColor: colors.grey50,
      borderColor: colors.grey200,
    },
    iconStyle: {
      color: colors.grey200,
    },
    textStyle: {
      color: colors.grey200,
    },
  },
  default: {
    containerStyle: {
      ...defaultContainerStyle,
      backgroundColor: colors.white,
      borderColor: colors.primary500,
    },
    iconStyle: {
      color: colors.primary500,
    },
    textStyle: {
      color: colors.primary500,
    },
  },
};

export const ICON_SIZE_PX = 24;
