import { ViewStyle } from "react-native";

import { PressableWithFeedbackState } from "@src/shared/view/components/PressableWithFeedback/PressableWithFeedback";

type pressableWithFeedbackStylesType = Record<
  PressableWithFeedbackState,
  (pressed: boolean) => ViewStyle
>;

export const pressableWithFeedbackStyles: pressableWithFeedbackStylesType = {
  default: (pressed: boolean) => ({ opacity: pressed ? 0.5 : 1 }),
  disabled: (_: boolean) => ({ opacity: 1 }),
};
