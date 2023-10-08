import styled from "@emotion/native";
import { WelcomeScreenProps } from "@src/navigation/Navigator.interface";
import { Button } from "@src/shared/view/components/Button/Button.component";
import { IconButton } from "@src/shared/view/components/IconButton/IconButton.component";
import { Input } from "@src/shared/view/components/Input/Input.component";
import { Loader } from "@src/shared/view/components/Loader/Loader.component";
import { ScreenTemplate } from "@src/shared/view/components/ScreenTemplate/ScreenTemplate.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { Switch } from "@src/shared/view/components/Switch/Switch.component";
import { Tag } from "@src/shared/view/components/Tag/Tag.component";
import { Typography } from "@src/shared/view/components/Typography/Typography.component";
import { ErrorIcon } from "@src/shared/view/icons/Error.icon";
import React, { useState } from "react";

export const WelcomePage = ({ navigation }: WelcomeScreenProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScreenTemplate>
      <Typography.P1 type="bold"> Welcome to aim33 playground</Typography.P1>
      <Spacer vertical={20} />
      <Description>
        <Typography.P2>
          Here you will be able to comfortably try our tools with us in the
          dojos.{" "}
        </Typography.P2>
        <Spacer vertical={10} />
        <Typography.P2>
          Before we start, here are the components available :
        </Typography.P2>
      </Description>
      <Spacer vertical={25} />
      <Typography.P2>Buttons :</Typography.P2>
      <Spacer vertical={10} />
      <Button.Primary label="Button.Primary" onPress={() => {}} />
      <Spacer vertical={10} />
      <Button.Secondary label="Button.Secondary" onPress={() => {}} />
      <Spacer vertical={10} />
      <Button.Tertiary label="Button.Tertiary" onPress={() => {}} />
      <Spacer vertical={20} />
      <Typography.P2>IconButton :</Typography.P2>
      <IconButton
        Icon={ErrorIcon}
        onPress={() => {}}
        accessibilityLabel="IconButton"
      />
      <Spacer vertical={20} />
      <Typography.P2>Input :</Typography.P2>
      <Input />
      <Spacer vertical={20} />
      <Typography.P2>Loader :</Typography.P2>
      <Loader />
      <Spacer vertical={20} />
      <Typography.P2>Switch :</Typography.P2>
      <Switch
        accessibilityHint="Switch"
        isChecked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
      <Spacer vertical={20} />
      <Typography.P2>Tags :</Typography.P2>
      <Spacer vertical={10} />
      <Tag label="default Tag" variant="default" />
      <Spacer vertical={5} />
      <Tag label="valid Tag" variant="valid" />
      <Spacer vertical={5} />
      <Tag label="error Tag" variant="error" />
      <Spacer vertical={5} />
      <Tag label="disabled Tag" variant="disabled" />
      <Spacer vertical={10} />
      <Spacer vertical={35} />
      <Description>
        <Typography.P2>
          We are now ready to start, let&apos;s dive in.{" "}
        </Typography.P2>
      </Description>
      <Spacer vertical={20} />
      <Button.Primary
        label="Dive In"
        onPress={() => {
          navigation.navigate("Search");
        }}
      />
    </ScreenTemplate>
  );
};

const Description = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.spaces.m,
  borderRadius: theme.spaces.m,
  backgroundColor: theme.colors.white,
  shadowColor: theme.colors.black,
  shadowRadius: theme.spaces.xxs,
  shadowOffset: {
    height: 3,
    width: 0,
  },
  shadowOpacity: 0.3,
}));
