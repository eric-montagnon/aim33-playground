import { fireEvent, screen } from "@testing-library/react-native";
import * as React from "react";

import { CrossIcon } from "@src/shared/view/icons/Cross.icon";

import { wrapAndRender } from "@src/shared/helpers/jest/render";
import { Tag } from "./Tag.component";

describe("Tag Component", () => {
  it("should render the label", () => {
    wrapAndRender(<Tag label="test" variant="default" />);

    expect(screen.getByText("test")).toBeTruthy();
  });

  it(`should render the icon when it is passed as props`, () => {
    wrapAndRender(<Tag label="test" variant="default" StartIcon={CrossIcon} />);

    expect(screen.getByTestId("cross-icon")).toBeTruthy();
  });

  it(`should call onPress when tag is pressed`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(<Tag label="test" variant="default" onPress={mockOnPress} />);

    fireEvent.press(screen.getByText("test"));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`should not call onPress when tag is pressed and variant is disabled`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <Tag label="test" variant="disabled" onPress={mockOnPress} />,
    );

    fireEvent.press(screen.getByText("test"));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});
