import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { storiesOf } from "@storybook/react-native";
import React from "react";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";
import { StorySubSection } from "@src/shared/view/storybook/StorySubSection/StorySubSection.component";

storiesOf("Spacer", module).add("Spacer", () => {
  return <Story />;
});

const Story = () => {
  const theme = useTheme();

  return (
    <StoryPage>
      <StorySection title="Spacer" />

      <StorySubSection title="Fixed" />

      <Block>
        <Typography.P1>Content</Typography.P1>
      </Block>

      <Spacer vertical={theme.spaces.m} />

      <Block>
        <Typography.P1>Content</Typography.P1>
      </Block>

      <Spacer vertical={theme.spaces.m} />

      <Row>
        <Block>
          <Typography.P1>Content</Typography.P1>
        </Block>
        <Spacer horizontal={theme.spaces.m} />
        <Block>
          <Typography.P1>Content</Typography.P1>
        </Block>
      </Row>

      <StorySubSection title="Flex" />

      <Container>
        <Row>
          <Block>
            <Typography.P1>Content</Typography.P1>
          </Block>
          <Spacer flex={1} horizontal={theme.spaces.m} />
          <Block>
            <Typography.P1>Content</Typography.P1>
          </Block>
        </Row>

        <Row>
          <Block>
            <Typography.P1>
              Very long content that takes all the space
            </Typography.P1>
          </Block>
          <Spacer flex={1} horizontal={theme.spaces.m} />
          <Block>
            <Typography.P1>
              Very long content that takes all the space
            </Typography.P1>
          </Block>
        </Row>

        <Spacer flex={1} vertical={theme.spaces.m} />

        <Block>
          <Typography.P1>Content</Typography.P1>
        </Block>
      </Container>
    </StoryPage>
  );
};

const Block = styled.View(({ theme }) => ({
  flexShrink: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spaces.m,
  backgroundColor: theme.colors.grey100,
}));

const Row = styled.View({
  flexDirection: "row",
  width: "100%",
});

const Container = styled.View(({ theme }) => ({
  height: 300,
  borderWidth: 1,
  borderColor: theme.colors.grey300,
}));
