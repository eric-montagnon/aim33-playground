import React from 'react';
import { Alert, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import styled from '@emotion/native';

import { RadioButton } from './RadioButton.component';
import { StoryPage } from '../../storybook/StoryPage/StoryPage.component';
import { StorySection } from '../../storybook/StorySection/StorySection.component';

const onPress = () => {
  Alert.alert('You checked the RadioButton');
  return;
};

const Container = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const LabelComponent = () => (
  <Container>
    <Text>{'With a label'}</Text>
    <Text>{'that is a ReactNode'}</Text>
  </Container>
);

storiesOf('RadioButton', module).add('RadioButton', () => (
  <StoryPage>
    <StorySection title="RadioButton" />
    <RadioButton
      isChecked={true}
      label={'Checked by default'}
      isDisabled={false}
      onPress={onPress}
    />
    <RadioButton
      isChecked={false}
      label={'UnChecked by default'}
      isDisabled={false}
      onPress={onPress}
    />
    <RadioButton
      isChecked={false}
      label={'Disabled'}
      accessibilityLabel={'Disabled radio button'}
      isDisabled={true}
      onPress={onPress}
    />
    <RadioButton
      isChecked={false}
      label={<LabelComponent />}
      // accessibilityLabel won't be inferred automatically since label is not a string
      accessibilityLabel={'With a label that is a ReactNode'}
      onPress={onPress}
    />
  </StoryPage>
));
