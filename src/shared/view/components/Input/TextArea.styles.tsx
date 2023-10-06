import styled from "@emotion/native";
import React from "react";
import { useTheme } from "@emotion/react";
import { View } from "react-native";

import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";

import { InputContainer } from "./common.style";

export const TextAreaContainer = styled(InputContainer)(({ theme }) => ({
  height: theme.spaces.xxl * 3,
}));

export const TextAreaBox = styled.TextInput(({ theme }) => ({
  flex: 1,
  textAlignVertical: "top",
  paddingTop: 0,
  color: theme.colors.textNormal,
  fontFamily: theme.fonts.paragraph.p1.regular.fontFamily,
  fontSize: theme.fonts.paragraph.p1.regular.fontSize,
}));

const Row = styled.View(({ theme }) => ({
  flexDirection: "row",
  marginHorizontal: theme.spaces.xs,
}));

export const LabelContainerView = styled.View({
  maxWidth: "66%",
});

export const Help = styled.View({
  justifyContent: "center",
  maxWidth: "33%",
});

export const HeaderContainer = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
});

type LabelProps = {
  label?: string;
  isDisabled: boolean;
  isError?: boolean;
  nativeID?: string;
};

const Label = ({ label, isDisabled, isError, nativeID }: LabelProps) => {
  const theme = useTheme();
  const labelColor = (() => {
    if (isError) return theme.colors.statusError;
    if (isDisabled) return theme.colors.textPlaceholder;
    return theme.colors.textNormal;
  })();

  return (
    <Typography.P1
      type="regular"
      color={labelColor}
      nativeID={nativeID}
      accessible={false}
      maxLinesBeforeEllipsis={2}
    >
      {label}
    </Typography.P1>
  );
};

const spacingBetweenLabels = 12;

type TopRowProps = {
  label: string | undefined;
  help?: string;
  isDisabled: boolean;
  isError: boolean;
  nativeID?: string;
};

export const TopRow = ({
  label,
  help,
  isDisabled,
  isError,
  nativeID,
}: TopRowProps) => {
  const theme = useTheme();
  if (!label && !help) return null;
  return (
    <View>
      <HeaderContainer>
        {!help ? (
          <Label
            label={label}
            isDisabled={isDisabled}
            isError={isError}
            nativeID={nativeID}
          />
        ) : (
          <>
            <LabelContainerView>
              <Label
                label={label}
                isDisabled={isDisabled}
                isError={isError}
                nativeID={nativeID}
              />
            </LabelContainerView>
            <Spacer horizontal={spacingBetweenLabels} />
            <Help>
              <Typography.P1
                type="regular"
                color={theme.colors.textPlaceholder}
              >
                {help}
              </Typography.P1>
            </Help>
          </>
        )}
      </HeaderContainer>
    </View>
  );
};

const ErrorLabel = ({ label }: { label: string }) => {
  const theme = useTheme();
  return (
    <Typography.P2
      type="regular"
      accessibilityRole={"alert"}
      color={theme.colors.statusError}
    >
      {label}
    </Typography.P2>
  );
};

type BottomRowProps = {
  errorLabel?: string;
  description?: string;
};

export const BottomRow = ({ errorLabel, description }: BottomRowProps) => {
  const theme = useTheme();
  if (errorLabel) {
    return (
      <Row>
        <ErrorLabel label={errorLabel} />
      </Row>
    );
  }
  if (description) {
    return (
      <Row>
        <Typography.P1 type="regular" color={theme.colors.textPlaceholder}>
          {description}
        </Typography.P1>
      </Row>
    );
  }
  return null;
};
