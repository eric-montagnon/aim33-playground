import { fireEvent, screen } from "@testing-library/react-native";
import * as React from "react";

import { IconButton } from "@src/shared/view/components/IconButton/IconButton.component";
import { CrossIcon } from "@src/shared/view/icons/Cross.icon";

import { wrapAndRender } from "@src/testing/render";

describe("Icon Button Component", () => {
  it("should render the icon", () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <IconButton
        onPress={mockOnPress}
        Icon={CrossIcon}
        accessibilityLabel="opens alert on press"
      />
    );

    expect(screen.getByTestId("cross-icon")).toBeTruthy();
  });

  it("should call the onPress", () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <IconButton
        onPress={mockOnPress}
        Icon={CrossIcon}
        accessibilityLabel="opens alert on press"
      />
    );

    fireEvent.press(screen.getByTestId("cross-icon"));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`should have disable the call of the onPress 
  when both props onPress and variant disabled are sent`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <IconButton
        onPress={mockOnPress}
        Icon={CrossIcon}
        isDisabled
        accessibilityLabel="opens alert on press"
      />
    );

    fireEvent.press(screen.getByTestId("cross-icon"));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});
