import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Alert } from "react-native";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";

import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";
import { TextArea } from "./TextArea.component";

const onTextChange = () => {
  Alert.alert("Your key works!");
};

const VerticalSpacer = () => <Spacer vertical={32} />;

storiesOf("TextArea", module).add("TextArea", () => (
  <StoryPage>
    <StorySection title="TextArea" />
    <TextArea
      placeholder="There are 5 dysfunctions..."
      label="Summarize '5 dysfunctions of a team'"
      help={"Do it under 500 words"}
    />
    <VerticalSpacer />
    <TextArea
      placeholder="Format I use, ..."
      label="Please enter any additional materials that you will need to access in order to complete your reading of the book '5 dysfunctions of a team'."
      help={"Material needs and time constraints"}
    />
    <VerticalSpacer />
    <TextArea
      placeholder="Format I use, ..."
      label="Please enter any additional materials that you will need to access in order to complete your reading of the book '5 dysfunctions of a team'. This could include the purchase of the book if you are reading the paperback version, the subscription to a service if you are listening to the audio version, or the format that you need to access the e-book version in."
    />
    <VerticalSpacer />
    <TextArea
      placeholder="Write about an experience you had about fear of commitment in a team setting"
      help={"Fear of commitment"}
    />
    <VerticalSpacer />
    <TextArea
      label="Write a summary about 5 dysfunctions of a team"
      description="You should breakdown the 5 dysfunctions"
    />
    <VerticalSpacer />
    <TextArea placeholder="What is your favorite learning moment from the book?" />
    <VerticalSpacer />
    <TextArea
      placeholder="My favorite moment was when..."
      label="What is your favorite learning moment from the book?"
      isDisabled={true}
    />
    <VerticalSpacer />
    <TextArea
      placeholder="My favorite moment was when..."
      label="What is your favorite learning moment from the book?"
      errorLabel={"Field can't be empty"}
      description={"Write an example on how it impacted you."}
    />
    <VerticalSpacer />
    <TextArea
      placeholder="My favorite moment was when..."
      label="With disabled and error content"
      help="With helper"
      errorLabel={"Field can't be empty"}
      isDisabled={true}
    />
    <VerticalSpacer />
    <TextArea
      placeholder="Press any key"
      label="Type a key on your keyboard to see if it works"
      onChangeText={onTextChange}
    />
  </StoryPage>
));
