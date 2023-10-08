import { useTheme } from "@emotion/react";
import React from "react";
import {
  interpolateColor,
  Layout,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

import { Loader } from "@src/shared/view/components/Loader/Loader.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import {
  AnimatedPressable,
  Background,
  disabledStyle,
  ICON_TO_BORDER_SPACING,
  IconCircle,
  SwitchStyle,
} from "@src/shared/view/components/Switch/Switch.styles";

interface Props {
  isDisabled?: boolean;
  labels?: { on?: string; off?: string };
  isChecked: boolean;
  isLoading?: boolean;
  style?: SwitchStyle;
  onPress: () => void;
  accessibilityHint: string;
}

const ANIMATION_DURATION = 300;

const ToggleComponent: React.FC<Props> = ({
  isDisabled = false,
  isChecked,
  isLoading,
  style,
  onPress,
  accessibilityHint,
}) => {
  const theme = useTheme();

  const transitionProgress = useDerivedValue(() => {
    return withTiming(isChecked ? 0 : 1, { duration: ANIMATION_DURATION });
  }, [isChecked]);

  const borderStyle = useAnimatedStyle(() => {
    const onBorderColor = style?.on?.container?.borderColor ?? "transparent";
    const offBorderColor = style?.off?.container?.borderColor ?? "transparent";
    const borderColor = interpolateColor(
      transitionProgress.value,
      [0, 1],
      [onBorderColor, offBorderColor],
    );
    const borderWidth = 1;
    return { borderColor, borderWidth };
  });

  const backgroundStyle = useAnimatedStyle(() => {
    const onBackgroundColor =
      style?.on?.container?.backgroundColor ?? theme.colors.primary500;
    const offBackgroundColor =
      style?.off?.container?.backgroundColor ?? theme.colors.grey200;
    const backgroundColor = interpolateColor(
      transitionProgress.value,
      [0, 1],
      [onBackgroundColor, offBackgroundColor],
    );
    return { backgroundColor };
  });

  const circleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      transitionProgress.value,
      [0, 1],
      [theme.colors.white, theme.colors.white],
    );
    return { backgroundColor };
  });

  const loaderColor = theme.colors.white;

  return (
    <Background
      style={[backgroundStyle, borderStyle]}
      accessibilityHint={accessibilityHint}
    >
      {isLoading ? (
        <Loader color={loaderColor} />
      ) : (
        <AnimatedPressable
          disabled={isDisabled}
          onPress={onPress}
          // If the style is not inline, the layout animation does not work
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            { flexDirection: isChecked ? "row" : "row-reverse" },
            isDisabled ? disabledStyle : undefined,
          ]}
        >
          <Spacer horizontal={10} />
          <Spacer flex={1} />
          <IconCircle
            layout={Layout.duration(ANIMATION_DURATION)}
            style={[circleStyle, borderStyle]}
          />
          <Spacer horizontal={ICON_TO_BORDER_SPACING} />
        </AnimatedPressable>
      )}
    </Background>
  );
};

export const Switch = React.memo(ToggleComponent);
