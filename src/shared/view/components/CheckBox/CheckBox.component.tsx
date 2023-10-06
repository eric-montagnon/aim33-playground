import React, { ReactNode, useCallback } from "react";
import { Pressable, View } from "react-native";
import styled from "@emotion/native";

import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import {
  CheckBoxAvailability,
  CheckBoxState,
  checkBoxStyle,
} from "@src/shared/view/components/CheckBox/CheckBox.styles";

import { CheckedBoxIcon } from "../../icons/CheckedBox.icon";
import { UncheckedBoxIcon } from "../../icons/UnCheckedBox.icon";
import { Spacer } from "../Spacer/Spacer.component";

type CheckBoxProps = {
  isChecked: boolean;
  onPress: () => void;
  isDisabled?: boolean;
  label: string | React.ReactNode;
  accessibilityLabel?: string;
};

export const CheckBox = ({
  label,
  accessibilityLabel,
  isChecked,
  onPress,
  isDisabled = false,
}: CheckBoxProps) => {
  const checkBoxState: CheckBoxState = isChecked ? "checked" : "unchecked";
  const checkBoxAvailability: CheckBoxAvailability = isDisabled
    ? "disabled"
    : "enabled";
  const defaultAccessibilityLabel =
    typeof label === "string" ? label : undefined;

  // https://www.bam.tech/article/how-insidious-reactnative-onpress-could-be
  const handlePress = useCallback(() => onPress(), [onPress]);

  return (
    <Container>
      <Pressable
        disabled={isDisabled}
        onPress={handlePress}
        accessibilityState={{ checked: isChecked }}
        accessibilityRole="checkbox"
        accessibilityLabel={accessibilityLabel ?? defaultAccessibilityLabel}
      >
        {isChecked ? (
          <CheckedBoxIcon
            color={checkBoxStyle.checked[checkBoxAvailability].checkBoxColor}
          />
        ) : (
          <UncheckedBoxIcon
            color={checkBoxStyle.unchecked[checkBoxAvailability].checkBoxColor}
          />
        )}
      </Pressable>
      <Spacer horizontal={8} />
      <View
        // Deactivate accessibility as it is redundant with Pressable accessibilityLabel
        accessibilityElementsHidden // iOS-supported
        importantForAccessibility={"no-hide-descendants"} // Android-supported
      >
        {typeof label === "string" ? (
          <Label
            checkBoxState={checkBoxState}
            checkBoxAvailability={checkBoxAvailability}
          >
            {label}
          </Label>
        ) : (
          label
        )}
      </View>
    </Container>
  );
};

const Container = styled.View({
  flexDirection: "row",
  alignSelf: "flex-start",
});

type LabelProps = {
  checkBoxState: CheckBoxState;
  checkBoxAvailability: CheckBoxAvailability;
  children: ReactNode;
};

export const Label = ({
  checkBoxState,
  checkBoxAvailability,
  children,
}: LabelProps) => {
  return (
    <Typography.P1
      color={checkBoxStyle[checkBoxState][checkBoxAvailability].labelColor}
    >
      {children}
    </Typography.P1>
  );
};
