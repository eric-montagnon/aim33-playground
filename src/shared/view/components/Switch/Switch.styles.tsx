import styled from "@emotion/native";
import Animated from "react-native-reanimated";

import { Typography } from "@src/shared/view/components/Typography/Typography.component";
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

const StyledLabel = styled(Typography.P3)({
  textTransform: "uppercase",
});

//Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef?%s%s
//Error is caused because Typography.P3 from 'StyledLabel' is a function and we want a class when calling in 'createAnimatedComponent()'
export const AnimatedLabel = Animated.createAnimatedComponent(StyledLabel);
