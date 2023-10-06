import styled from "@emotion/native";
import React, { useCallback } from "react";
import { Pressable } from "react-native";

import { ButtonProps } from "@src/shared/view/components/Button/Button.component";
import { BaseButtonStyle } from "@src/shared/view/components/Button/Button.styles";
import { ButtonTypography } from "@src/shared/view/components/Button/ButtonTypography.component";
import { Loader } from "@src/shared/view/components/Loader/Loader.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";

const BUTTON_ICON_SIZE_PX = 24;

type BaseButtonProps = ButtonProps & {
  style: BaseButtonStyle;
};

export const BaseButton = ({
  isDisabled,
  isLoading,
  onPress,
  label,
  StartIcon,
  EndIcon,
  style,
}: BaseButtonProps) => {
  // https://www.bam.tech/article/how-insidious-reactnative-onpress-could-be
  const handlePress = useCallback(() => onPress(), [onPress]);

  return (
    <Pressable
      onPress={handlePress}
      disabled={isLoading || isDisabled}
      style={({ pressed }) => {
        if (isDisabled) {
          return style.disabled.container;
        } else if (pressed) {
          return style.active.container;
        } else {
          return style.rest.container;
        }
      }}
      accessibilityLabel={label}
      accessibilityRole="button"
    >
      {({ pressed }) => {
        const textStyle = (() => {
          if (isDisabled) return style.disabled.text;
          if (pressed) return style.active.text;
          return style.rest.text;
        })();

        return (
          <>
            <ContentContainer isVisible={!isLoading}>
              {StartIcon ? (
                <>
                  <StartIcon
                    color={textStyle.color}
                    size={BUTTON_ICON_SIZE_PX}
                  />
                  <Spacer horizontal={8} />
                </>
              ) : null}
              <ButtonTypography style={textStyle}>{label}</ButtonTypography>
              {EndIcon ? (
                <>
                  <Spacer horizontal={8} />
                  <EndIcon color={textStyle.color} size={BUTTON_ICON_SIZE_PX} />
                </>
              ) : null}
            </ContentContainer>
            {isLoading ? (
              <LoadingContainer>
                <Loader color={textStyle.color} testID="activity-indicator" />
              </LoadingContainer>
            ) : null}
          </>
        );
      }}
    </Pressable>
  );
};

export const ContentContainer = styled.View<{
  isVisible: boolean;
}>(({ isVisible }) => ({
  opacity: isVisible ? 1 : 0,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
}));

export const LoadingContainer = styled.View({
  position: "absolute",
});
