import React from "react";

import { BaseButton } from "@src/shared/view/components/Button/BaseButton.component";
import {
  primaryButtonStyle,
  secondaryButtonStyle,
  tertiaryButtonStyle,
} from "@src/shared/view/components/Button/Button.styles";
import { IconType } from "@src/shared/view/icons/Icon.types";

export type ButtonProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
  label: string;
  StartIcon?: IconType;
  EndIcon?: IconType;
};

export const Button = {
  Primary: (props: ButtonProps) => {
    return <BaseButton style={primaryButtonStyle} {...props} />;
  },
  Secondary: (props: ButtonProps) => {
    return <BaseButton style={secondaryButtonStyle} {...props} />;
  },
  Tertiary: (props: ButtonProps) => {
    return <BaseButton style={tertiaryButtonStyle} {...props} />;
  },
};
