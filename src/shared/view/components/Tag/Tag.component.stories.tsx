import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Alert } from "react-native";

import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";
import { CrossIcon } from "@src/shared/view/icons/Cross.icon";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";

import { Tag } from "./Tag.component";

const pressToPrint = () => {
  Alert.alert("tag pressed");
};

const VerticalSpacer = () => <Spacer vertical={8} />;

storiesOf("Tag", module).add("Tag", () => (
  <StoryPage>
    <StorySection title="Tag" />
    <Tag variant={"default"} label="default tag" />
    <VerticalSpacer />
    <Tag variant={"valid"} label="valid tag" />
    <VerticalSpacer />
    <Tag variant={"error"} label="error tag" />
    <VerticalSpacer />
    <Tag variant={"disabled"} label="disabled tag" />
    <VerticalSpacer />
    <Tag variant={"default"} label="tag with onPress" onPress={pressToPrint} />
    <VerticalSpacer />
    <Tag
      variant={"disabled"}
      label="tag with disabled onPress"
      onPress={pressToPrint}
    />
    <VerticalSpacer />
    <Tag
      variant={"default"}
      label="tag with start icon"
      StartIcon={CrossIcon}
    />
    <VerticalSpacer />
    <Tag variant={"default"} label="tag with end icon" EndIcon={CrossIcon} />
  </StoryPage>
));
