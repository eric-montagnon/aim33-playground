import styled from "@emotion/native";
import Animated from "react-native-reanimated";

import { ThemeColor } from "@src/shared/view/theme/colors.types";

const ICON_SIZE = 31;

export const ICON_TO_BORDER_SPACING = 5;

export const disabledStyle = { opacity: 0.5 };

export type BaseSwitchStyle = {
  container?: { backgroundColor?: ThemeColor; borderColor?: ThemeColor };
  text?: { color?: ThemeColor };
};

export type SwitchStyle = {
  on?: BaseSwitchStyle;
  off?: BaseSwitchStyle;
};

export const Background = styled(Animated.View)(() => ({
  width: 74, // Fixed size because the texts for the 2 positions are not the same size
  height: ICON_SIZE + ICON_TO_BORDER_SPACING * 2,
  borderRadius: (ICON_SIZE + ICON_TO_BORDER_SPACING * 2) / 2,
  backgroundColor: "white",
  justifyContent: "center",
}));

const StyledPressable = styled.Pressable({
  height: "100%",
  alignItems: "center",
  justifyContent: "space-between",
});

export const AnimatedPressable =
  Animated.createAnimatedComponent(StyledPressable);

export const IconCircle = styled(Animated.View)(() => ({
  width: ICON_SIZE,
  height: ICON_SIZE,
  borderRadius: ICON_SIZE / 2,
  alignItems: "center",
  justifyContent: "center",
}));
