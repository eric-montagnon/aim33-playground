import { useTheme } from "@emotion/react";
import React, { forwardRef, useState } from "react";
import { Platform, TextInput, TextInputProps, View } from "react-native";

import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { ErrorIcon } from "@src/shared/view/icons/Error.icon";

import { InputBox, Label } from "./Input.styles";
import { InputContainer } from "./common.style";

const ERROR_ICON_SIZE = 24;

export type InputProps = Omit<
  TextInputProps,
  "onFocus" | "onBlur" | "editable"
> & {
  label?: string;
  isDisabled?: boolean;
  errorLabel?: string;
  rightIcon?: React.ReactNode;
};

const getNativeIdFromLabel = (label: string) => label.replace(/ /g, "-");

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      isDisabled = false,
      errorLabel,
      rightIcon,
      ...textInputProps
    }: InputProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme();
    const labelColor = isDisabled
      ? theme.colors.textPlaceholder
      : theme.colors.textNormal;
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    const inputAccessibilityProps = Platform.select({
      android: {
        accessibilityLabelledBy: label
          ? getNativeIdFromLabel(label)
          : undefined,
      },
      ios: { accessibilityLabel: label },
    });

    const isError = errorLabel !== undefined;

    return (
      <View>
        {label ? (
          <Label
            label={label}
            labelColor={labelColor}
            nativeId={getNativeIdFromLabel(label)}
          />
        ) : null}
        <InputContainer
          isDisabled={isDisabled}
          isError={isError}
          isFocused={isFocused}
        >
          <InputBox
            ref={ref}
            editable={!isDisabled}
            onFocus={onFocus}
            onBlur={onBlur}
            {...inputAccessibilityProps}
            {...textInputProps}
          />
          {rightIcon !== undefined ? rightIcon : null}
          {isError ? (
            <ErrorIcon
              color={theme.colors.statusError}
              size={ERROR_ICON_SIZE}
            />
          ) : null}
        </InputContainer>
        {isError && errorLabel ? (
          <Typography.P2
            type={"regular"}
            color={theme.colors.statusError}
            // WARNING: KO when used in stories on iOS, OK otherwise
            accessibilityRole="alert"
          >
            {errorLabel}
          </Typography.P2>
        ) : null}
      </View>
    );
  },
);

Input.displayName = "Input";
