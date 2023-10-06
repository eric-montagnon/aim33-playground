import { ViewStyle } from "react-native";

import { colors } from "@src/shared/view/theme/colors";
import { ThemeColor } from "@src/shared/view/theme/colors.types";

import { TooltipProps } from "./Tooltip.component";

const baseContainerStyle: ViewStyle = {
  flex: 1,
  padding: 16,
  flexDirection: "row",
  alignItems: "center",
};

type TooltipStyle = Record<
  TooltipProps["type"],
  {
    container: ViewStyle;
    icon: { color: ThemeColor };
  }
>;

export const tooltipStyle: TooltipStyle = {
  info: {
    container: {
      ...baseContainerStyle,
      backgroundColor: colors.grey50,
    },
    icon: {
      color: colors.black,
    },
  },
  success: {
    container: {
      ...baseContainerStyle,
      backgroundColor: colors.statusSuccessLight,
    },
    icon: {
      color: colors.black,
    },
  },
  warning: {
    container: {
      ...baseContainerStyle,
      backgroundColor: colors.statusWarningLight,
    },
    icon: {
      color: colors.black,
    },
  },
  error: {
    container: {
      ...baseContainerStyle,
      backgroundColor: colors.statusErrorLight,
    },
    icon: {
      color: colors.black,
    },
  },
};

export const tooltipContentContainerStyle: ViewStyle = {
  paddingLeft: 8,
  flex: 1,
  flexDirection: "column",
};
