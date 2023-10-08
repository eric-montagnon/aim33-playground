import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import * as React from "react";

import { WelcomeScreenProps } from "@src/navigation/Navigator.interface";
import { WelcomePage } from "@src/navigation/pages/welcome/Welcome.page";
import { wrapAndRender } from "@src/shared/helpers/jest/render";

const navigateMock = jest.fn();
const welcomeTestProps = {
  navigation: {
    navigate: navigateMock,
  },
} as unknown as WelcomeScreenProps;

describe("Welcome Page", () => {
  it("displays properly", () => {
    wrapAndRender(<WelcomePage {...welcomeTestProps} />);

    expect(screen.getByText("Welcome to aim33 playground")).toBeTruthy();
    expect(screen).toMatchComponentSnapshot();
  });
  it("navigates to search when clicking on Dive In", async () => {
    wrapAndRender(<WelcomePage {...welcomeTestProps} />);

    fireEvent.press(screen.getByText("Dive In"));

    await waitFor(() => expect(navigateMock).toHaveBeenCalledWith("Search"));
  });
});
