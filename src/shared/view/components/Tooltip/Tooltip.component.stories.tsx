import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Tooltip } from './Tooltip.component';
import { StoryPage } from '../../storybook/StoryPage/StoryPage.component';
import { StorySection } from '../../storybook/StorySection/StorySection.component';

storiesOf('Tooltip', module).add('Tooltip', () => (
  <StoryPage>
    <StorySection title="Tooltip" />
    <Tooltip type={'info'} title="Info tooltip" body="My tooltip body" />
    <Tooltip type={'success'} title="Success tooltip" body="My tooltip body" />
    <Tooltip type={'warning'} title="Warning tooltip" body="My tooltip body" />
    <Tooltip
      type={'error'}
      title="Error tooltip"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    />
  </StoryPage>
));
