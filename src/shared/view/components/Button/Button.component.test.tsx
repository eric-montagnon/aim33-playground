import { fireEvent, screen } from '@testing-library/react-native';
import * as React from 'react';

import { wrapAndRender } from '@src/testing/render';

import { CrossIcon } from '../../icons/Cross.icon';
import { Button } from './Button.component';

const isLoading = [true, false];
const isDisabled = [true, false];

const differentTestCases = isLoading.flatMap((loadingElement) =>
  isDisabled.map((disabledElement) => ({
    isLoading: loadingElement,
    isDisabled: disabledElement,
  })),
);

describe('Button Component', () => {
  it('should render the label', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <Button.Primary label="Button primary" onPress={mockOnPress} />,
    );

    expect(screen.getByText('Button primary')).toBeTruthy();
  });

  it('should render the icon', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <Button.Primary
        label="Button primary"
        onPress={mockOnPress}
        StartIcon={CrossIcon}
      />,
    );

    expect(screen.getByTestId('cross-icon')).toBeTruthy();
  });

  it('should call the onPress', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(<Button.Primary label="test" onPress={mockOnPress} />);

    fireEvent.press(screen.getByText('test'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`should not call onPress when button is pressed and disabled is true`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <Button.Primary label="test" onPress={mockOnPress} isDisabled={true} />,
    );

    fireEvent.press(screen.getByText('test'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });

  it.each(differentTestCases)(
    'renders Primary Button with props %p',
    (props) => {
      wrapAndRender(
        <Button.Primary
          label="Primary button"
          onPress={jest.fn()}
          {...props}
        />,
      );
      expect(screen).toMatchComponentSnapshot();
    },
  );

  it.each(differentTestCases)(
    'renders Secondary Button with props %p',
    (props) => {
      wrapAndRender(
        <Button.Secondary
          label="Secondary button"
          onPress={jest.fn()}
          {...props}
        />,
      );
      expect(screen).toMatchComponentSnapshot();
    },
  );

  it.each(differentTestCases)(
    'renders Tertiary Button with props %p',
    (props) => {
      wrapAndRender(
        <Button.Tertiary
          label="Tertiary button"
          onPress={jest.fn()}
          {...props}
        />,
      );
      expect(screen).toMatchComponentSnapshot();
    },
  );
});
