import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Alert } from "react-native";
import styled from "@emotion/native";
import { useTheme } from "@emotion/react";

import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";
import { CrossIcon } from "@src/shared/view/icons/Cross.icon";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { IconButton } from "@src/shared/view/components/IconButton/IconButton.component";

const SPACE_BETWEEN_BUTTONS = 10;

const pressToPrint = () => {
  Alert.alert("Button pressed");
};

storiesOf("IconButton", module).add("IconButton", () => <Story />);

const Story = () => {
  const theme = useTheme();
  return (
    <StoryPage>
      <StorySection title="IconButton" />
      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        color={theme.colors.primary500}
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        size={10}
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />

      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        isDisabled
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        isDisabled
        color={theme.colors.primary500}
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        isDisabled
        size={48}
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        border
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        color={theme.colors.primary500}
        border
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
      <IconButton
        onPress={pressToPrint}
        Icon={CrossIcon}
        size={10}
        border
        accessibilityLabel="opens alert on press"
      />
      <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
      <Container>
        <IconButton
          onPress={pressToPrint}
          Icon={CrossIcon}
          border
          accessibilityLabel="opens alert on press"
        />
        <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
        <IconButton
          onPress={pressToPrint}
          Icon={CrossIcon}
          border
          isDisabled
          accessibilityLabel="opens alert on press"
        />
      </Container>
    </StoryPage>
  );
};

const Container = styled.View({ width: 40 });
