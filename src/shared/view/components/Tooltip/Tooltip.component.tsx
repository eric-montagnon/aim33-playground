import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import { ThemeColor } from "@src/shared/view/theme/colors.types";

import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { ErrorIcon } from "@src/shared/view/icons/Error.icon";
import { InfoIcon } from "@src/shared/view/icons/Info.icon";
import { SuccessIcon } from "@src/shared/view/icons/Success.icon";
import { WarningIcon } from "@src/shared/view/icons/Warning.icon";
import { tooltipContentContainerStyle, tooltipStyle } from "./Tooltip.styles";

const TOOLTIP_ICON_SIZE_PX = 24;

export type TooltipProps = {
  type: "info" | "success" | "warning" | "error";
  title: string;
  body: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Tooltip = ({
  type,
  title,
  body,
  containerStyle,
}: TooltipProps) => {
  return (
    <View style={[tooltipStyle[type].container, containerStyle]}>
      <TooltipIcon
        type={type}
        size={TOOLTIP_ICON_SIZE_PX}
        color={tooltipStyle[type].icon.color}
      />
      <View style={tooltipContentContainerStyle}>
        <Typography.P1
          type={"bold"}
          accessibilityRole="alert" //TODO on iOS 'alert' is not read out (https://github.com/bamlab/react-native-warehouse/issues/187)
        >
          {title}
        </Typography.P1>
        <Typography.P2
          type={"regular"}
          accessibilityRole="alert" //TODO on iOS 'alert' is not read out (https://github.com/bamlab/react-native-warehouse/issues/187)
        >
          {body}
        </Typography.P2>
      </View>
    </View>
  );
};

export const TooltipIcon = ({
  type,
  size,
  color,
}: {
  type: TooltipProps["type"];
  size: number;
  color: ThemeColor;
}) => {
  switch (type) {
    case "warning":
      return <WarningIcon size={size} color={color} />;
    case "success":
      return <SuccessIcon size={size} color={color} />;
    case "error":
      return <ErrorIcon size={size} color={color} />;
    case "info":
      return <InfoIcon size={size} color={color} />;
    default:
      return <InfoIcon size={size} color={color} />;
  }
};
