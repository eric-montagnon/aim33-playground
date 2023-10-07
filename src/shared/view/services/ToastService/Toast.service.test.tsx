import { fireEvent, screen } from '@testing-library/react-native';
import * as React from 'react';
import { Button } from 'react-native';

import { wrapAndRender } from '@src/shared/helpers/jest/render';
import { ToastService } from './Toast.service';

describe('Toast Service', () => {
  it('renders the title and body', async () => {
    wrapAndRender(
      <Button
        title="Error toast"
        onPress={() => {
          ToastService.show({
            title: 'An error toast is displayed',
            body: 'body',
            type: 'error',
          });
        }}
      />,
    );

    fireEvent.press(screen.getByText('Error toast'));

    const toastTitle = await screen.findByText('An error toast is displayed');

    expect(toastTitle).toBeTruthy();
  });
});
