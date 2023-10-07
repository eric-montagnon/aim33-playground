import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Alert } from "react-native";

import { CrossIcon } from "@src/shared/view/icons/Cross.icon";
import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Button } from "./Button.component";

const SPACE_BETWEEN_BUTTONS = 10;

const pressToPrint = () => {
  Alert.alert("Button pressed");
};

storiesOf("Button", module).add("Button", () => (
  <StoryPage>
    <StorySection title="Button" />
    <Button.Primary label="Button primary" onPress={pressToPrint} />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Secondary label="Button secondary" onPress={pressToPrint} />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Tertiary label="Button tertiary" onPress={pressToPrint} />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Primary
      label="Button disabled primary"
      onPress={pressToPrint}
      isDisabled
    />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Secondary
      label="Button disabled secondary"
      onPress={pressToPrint}
      isDisabled
    />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Tertiary
      label="Button disabled tertiary"
      onPress={pressToPrint}
      isDisabled
    />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Primary
      onPress={pressToPrint}
      label="Button icon Primary"
      StartIcon={CrossIcon}
    />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Secondary
      onPress={pressToPrint}
      label="Button icon Secondary"
      StartIcon={CrossIcon}
    />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Tertiary
      onPress={pressToPrint}
      label="Button icon Tertiary"
      EndIcon={CrossIcon}
    />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Primary
      label="Button loading"
      onPress={pressToPrint}
      isLoading={true}
    />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Secondary
      onPress={pressToPrint}
      label="Button Loading Tertiary"
      isLoading={true}
    />
    <Spacer vertical={SPACE_BETWEEN_BUTTONS} />
    <Button.Tertiary
      onPress={pressToPrint}
      label="Button Loading Tertiary"
      isLoading={true}
    />
  </StoryPage>
));
