import { screen } from "@testing-library/react-native";
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

describe("Sign up Page", () => {
  it("displays properly", () => {
    wrapAndRender(<WelcomePage {...welcomeTestProps} />);

    expect(screen.getByText("Welcome")).toBeTruthy();
    expect(screen).toMatchComponentSnapshot();
  });
});
