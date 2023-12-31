import { screen } from "@testing-library/react-native";
import * as React from "react";

import { wrapAndRender } from "@src/shared/helpers/jest/render";
import { Tooltip } from "./Tooltip.component";

describe("Tooltip Component", () => {
  it("should render the title and body", () => {
    wrapAndRender(<Tooltip type="info" title="titre" body="Corps de text" />);

    expect(screen.getByText("titre")).toBeTruthy();
    expect(screen.getByText("Corps de text")).toBeTruthy();
  });
});
