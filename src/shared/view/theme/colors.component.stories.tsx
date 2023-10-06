import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "@emotion/native";

import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";
import { theme } from "@src/shared/view/theme/theme";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";

storiesOf("Colors", module).add("Colors", () => (
  <StoryPage>
    <StorySection title="Colors" />
    {Object.entries(theme.colors).map(([colorName, colorValue]) => {
      return (
        <ColorRow key={colorName}>
          <ColorRectangle color={colorValue} />
          <Spacer horizontal={16} />
          <Typography.P2>{colorName}</Typography.P2>
        </ColorRow>
      );
    })}
  </StoryPage>
));

const ColorRow = styled.View({
  justifyContent: "flex-start",
  paddingVertical: 4,
  flexDirection: "row",
  alignItems: "center",
});

const ColorRectangle = styled.View<{ color: string }>(({ color }) => ({
  height: 32,
  width: 100,
  backgroundColor: color,
}));
