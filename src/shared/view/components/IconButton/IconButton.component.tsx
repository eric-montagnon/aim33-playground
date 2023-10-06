import React, { useCallback } from "react";

import { IconType } from "@src/shared/view/icons/Icon.types";
import { ThemeColor } from "@src/shared/view/theme/colors.types";
import { PressableWithFeedback } from "@src/shared/view/components/PressableWithFeedback/PressableWithFeedback";

import {
  iconButtonWithBorderStyle,
  iconButtonStyle,
} from "./IconButton.styles";

type IconButtonProps = {
  Icon: IconType;
  isDisabled?: boolean;
  onPress: () => void;
  size?: number;
  color?: ThemeColor;
  border?: boolean;
  accessibilityLabel: string;
};

export type IconButtonState = "default" | "disabled";

export const IconButton = ({
  Icon,
  isDisabled,
  onPress,
  size,
  color,
  border,
  accessibilityLabel,
}: IconButtonProps) => {
  const state: IconButtonState = isDisabled ? "disabled" : "default";

  // https://www.bam.tech/article/how-insidious-reactnative-onpress-could-be
  const handlePress = useCallback(() => onPress(), [onPress]);

  return (
    <PressableWithFeedback
      onPress={handlePress}
      disabled={isDisabled}
      style={[
        iconButtonStyle[state].container,
        border ? iconButtonWithBorderStyle[state].container(color) : null,
      ]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <Icon color={iconButtonStyle[state].iconColor(color)} size={size} />
    </PressableWithFeedback>
  );
};
