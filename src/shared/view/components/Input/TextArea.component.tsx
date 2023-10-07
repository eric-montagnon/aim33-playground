import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import { Platform, View } from "react-native";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";

import { ErrorIcon } from "@src/shared/view/icons/Error.icon";
import {
  BottomRow,
  TextAreaBox,
  TextAreaContainer,
  TopRow,
} from "./TextArea.styles";

type TextAreaProps = {
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
  help?: string;
  isDisabled?: boolean;
  placeholder?: string;
  errorLabel?: string;
  description?: string;
};

const getNativeIdFromLabel = (label: string) => label.replace(/ /g, "-");

export const TextArea = ({
  onChangeText,
  value,
  label,
  help,
  isDisabled = false,
  placeholder,
  errorLabel,
  description,
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
  const isError = errorLabel !== undefined;

  const textAreaAccessibilityProps = Platform.select({
    android: {
      accessibilityLabelledBy: label ? getNativeIdFromLabel(label) : undefined,
    },
    ios: { accessibilityLabel: label },
  });

  return (
    <View>
      <TopRow
        label={label}
        help={help}
        isDisabled={isDisabled}
        isError={false}
        nativeID={label ? getNativeIdFromLabel(label) : undefined}
      />
      <Spacer vertical={theme.spaces.xs} />
      <TextAreaContainer
        isDisabled={isDisabled}
        isError={isError}
        isFocused={isFocused}
      >
        <TextAreaBox
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          editable={!isDisabled}
          onFocus={onFocus}
          onBlur={onBlur}
          multiline={true}
          {...textAreaAccessibilityProps}
        />
        {isError ? <ErrorIcon color={theme.colors.statusError} /> : null}
      </TextAreaContainer>
      <BottomRow errorLabel={errorLabel} description={description} />
    </View>
  );
};
