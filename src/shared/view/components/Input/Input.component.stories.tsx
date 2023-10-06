import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Alert } from "react-native";

import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";

import { Input } from "./Input.component";

const onTextChange = () => {
  Alert.alert("Input pressed");
};

const VerticalSpacer = () => <Spacer vertical={32} />;

storiesOf("Input", module).add("Input", () => (
  <StoryPage>
    <StorySection title="Input" />
    <Input placeholder="With placeholder" label="With label" />
    <VerticalSpacer />
    <Input label="Without placeholder" />
    <VerticalSpacer />
    <Input placeholder="Without label" />
    <VerticalSpacer />
    <Input
      placeholder="With placeholder"
      label="With disabled content"
      isDisabled={true}
    />
    <VerticalSpacer />
    <Input
      placeholder="With placeholder"
      label="With error content"
      errorLabel={"There is an error"}
    />
    <VerticalSpacer />
    <Input
      placeholder="With placeholder"
      label="With disabled and error content"
      errorLabel={"There is an error"}
      isDisabled={true}
    />
    <VerticalSpacer />
    <Input
      placeholder="With placeholder"
      label="With onTextChange interrupting input"
      errorLabel={"There is an error"}
      onChangeText={onTextChange}
    />
  </StoryPage>
));
