import styled from "@emotion/native";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { CheckedBoxIcon } from "@src/shared/view/icons/CheckedBox.icon";
import { CheckedRadioButtonIcon } from "@src/shared/view/icons/CheckedRadioButton.icon";
import { CrossIcon } from "@src/shared/view/icons/Cross.icon";
import { DisabledRadioButtonIcon } from "@src/shared/view/icons/DisabledRadioButton.icon";
import { ErrorIcon } from "@src/shared/view/icons/Error.icon";
import { EyeIcon } from "@src/shared/view/icons/Eye.icon";
import { EyeClosedIcon } from "@src/shared/view/icons/EyeClosed.icon";
import { IconType } from "@src/shared/view/icons/Icon.types";
import { InfoIcon } from "@src/shared/view/icons/Info.icon";
import { LeftArrowIcon } from "@src/shared/view/icons/LeftArrow.icon";
import { SuccessIcon } from "@src/shared/view/icons/Success.icon";
import { UncheckedBoxIcon } from "@src/shared/view/icons/UnCheckedBox.icon";
import { UncheckedRadioButtonIcon } from "@src/shared/view/icons/UncheckedRadioButton.icon";
import { WarningIcon } from "@src/shared/view/icons/Warning.icon";
import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";
import { theme } from "@src/shared/view/theme/theme";

const icons: IconType[] = [
  CheckedBoxIcon,
  CheckedRadioButtonIcon,
  CrossIcon,
  DisabledRadioButtonIcon,
  ErrorIcon,
  EyeIcon,
  EyeClosedIcon,
  InfoIcon,
  SuccessIcon,
  UncheckedBoxIcon,
  UncheckedRadioButtonIcon,
  WarningIcon,
  LeftArrowIcon,
];

const SingleIconContainer = styled.View({
  width: "25%",
  marginBottom: 25,
  alignItems: "center",
});

const IconsContainer = styled.View({
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
});

const createIcon = (icon: IconType, index: number) =>
  React.createElement(icon, {
    key: index,
    size: 30,
    color: theme.colors.black,
  });

storiesOf("Icons", module).add("All icons", () => (
  <StoryPage>
    <StorySection title="All icons" />
    <IconsContainer>
      {icons.map((icon, index) => {
        return (
          <SingleIconContainer key={icon.displayName}>
            {createIcon(icon, index)}
            <Spacer vertical={5} />
            <View>
              <Typography.P3>{icon.displayName || ""}</Typography.P3>
            </View>
          </SingleIconContainer>
        );
      })}
    </IconsContainer>
  </StoryPage>
));
