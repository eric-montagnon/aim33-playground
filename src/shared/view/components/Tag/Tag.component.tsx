import React, { useCallback } from "react";

import { IconType } from "@src/shared/view/icons/Icon.types";
import { PressableWithFeedback } from "@src/shared/view/components/PressableWithFeedback/PressableWithFeedback";

import { ICON_SIZE_PX, tagStyle } from "./Tag.styles";
import { Typography } from "../Typography/Typography.component";

export type TagVariant = "default" | "valid" | "error" | "disabled";

export type TagProps = {
  label?: string;
  StartIcon?: IconType;
  EndIcon?: IconType;
  onPress?: () => void;
  variant: TagVariant;
};

export const Tag = ({
  label = "",
  StartIcon,
  EndIcon,
  onPress,
  variant,
}: TagProps) => {
  // https://www.bam.tech/article/how-insidious-reactnative-onpress-could-be
  const handlePress = useCallback(
    () => (onPress ? onPress() : undefined),
    [onPress]
  );

  return (
    <PressableWithFeedback
      onPress={handlePress}
      disabled={!onPress || variant === "disabled"}
      style={tagStyle[variant].containerStyle}
    >
      {StartIcon ? (
        <StartIcon
          color={tagStyle[variant].iconStyle.color}
          size={ICON_SIZE_PX}
        />
      ) : null}
      <Typography.P3 color={tagStyle[variant].textStyle.color} type={"bold"}>
        {label}
      </Typography.P3>
      {EndIcon ? (
        <EndIcon
          color={tagStyle[variant].iconStyle.color}
          size={ICON_SIZE_PX}
        />
      ) : null}
    </PressableWithFeedback>
  );
};
