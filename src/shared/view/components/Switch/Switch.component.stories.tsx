import styled from "@emotion/native";
import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";

import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Switch } from "@src/shared/view/components/Switch/Switch.component";
import { SwitchStyle } from "@src/shared/view/components/Switch/Switch.styles";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { StoryPage } from "@src/shared/view/storybook/StoryPage/StoryPage.component";
import { StorySection } from "@src/shared/view/storybook/StorySection/StorySection.component";
import { theme } from "@src/shared/view/theme/theme";

const SPACE_BETWEEN_SWITCHES = 30;

type ToggleContainerProps = {
  isDefaultChecked: boolean;
  isDisabled?: boolean;
  labels?: { on?: string; off?: string };
  isLoading?: boolean;
  style?: SwitchStyle;
};

const SwitchContainer = ({
  isDefaultChecked,
  isDisabled,
  labels,
  isLoading,
  style,
}: ToggleContainerProps) => {
  const [isChecked, setIsChecked] = useState(isDefaultChecked);
  const checkedCaption = "Checked Switch";
  const uncheckedCaption = "Unchecked Switch";
  return (
    <Container>
      <Switch
        isDisabled={isDisabled}
        labels={labels}
        isChecked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
        isLoading={isLoading}
        style={style}
        accessibilityHint="Will toggle the switch button"
      />
      <Spacer horizontal={SPACE_BETWEEN_SWITCHES} />
      <Text>{isChecked ? checkedCaption : uncheckedCaption}</Text>
    </Container>
  );
};
const Container = styled(View)({ flexDirection: "row", alignItems: "center" });

storiesOf("Switch", module).add("Switch", () => (
  <StoryPage>
    <StorySection title="Switch" />
    <SwitchContainer isDefaultChecked labels={{ on: "ON", off: "OFF" }} />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer
      isDefaultChecked={false}
      labels={{ on: "ON", off: "OFF" }}
    />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <Typography.P2 type="bold">Disabled Switch</Typography.P2>
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer
      isDefaultChecked
      isDisabled
      labels={{ on: "ON", off: "OFF" }}
    />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer
      isDefaultChecked={false}
      isDisabled
      labels={{ on: "ON", off: "OFF" }}
    />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <Typography.P2 type="bold">Switch with border</Typography.P2>
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer
      isDefaultChecked
      style={{
        on: { container: { borderColor: theme.colors.grey300 } },
        off: { container: { borderColor: theme.colors.primary500 } },
      }}
      labels={{ on: "ON", off: "OFF" }}
    />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer
      isDefaultChecked={false}
      style={{
        on: { container: { borderColor: theme.colors.grey300 } },
        off: { container: { borderColor: theme.colors.primary500 } },
      }}
      labels={{ on: "ON", off: "OFF" }}
    />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <Typography.P2 type="bold">No text inside Switch</Typography.P2>
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer isDefaultChecked />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer isDefaultChecked={false} />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <Typography.P2 type="bold">Loading</Typography.P2>
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer
      isDefaultChecked
      isLoading
      labels={{ on: "ON", off: "OFF" }}
    />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
    <SwitchContainer
      isDefaultChecked={false}
      isLoading
      labels={{ on: "ON", off: "OFF" }}
    />
    <Spacer vertical={SPACE_BETWEEN_SWITCHES} />
  </StoryPage>
));
