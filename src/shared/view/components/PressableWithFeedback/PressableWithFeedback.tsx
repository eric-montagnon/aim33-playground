import React from "react";
import { PressableProps, Pressable, ViewProps } from "react-native";

import { pressableWithFeedbackStyles } from "@src/shared/view/components/PressableWithFeedback/PressableWithFeedback.styles";

type PressableWithFeedbackProps = Omit<PressableProps, "style"> &
  Pick<ViewProps, "style">;

export type PressableWithFeedbackState = "default" | "disabled";

export const PressableWithFeedback = ({
  children,
  style,
  disabled,
  ...props
}: PressableWithFeedbackProps) => {
  const state: PressableWithFeedbackState = disabled ? "disabled" : "default";
  return (
    <Pressable
      style={({ pressed }) => [
        pressableWithFeedbackStyles[state](pressed),
        style,
      ]}
      disabled={disabled}
      accessibilityRole="button"
      {...props}
    >
      {children}
    </Pressable>
  );
};
