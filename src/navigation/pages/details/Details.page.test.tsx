import { drinksListMock } from "@src/modules/drinks/infra/drink.mock";
import { DetailsPage } from "@src/navigation/pages/details/Details.page";
import { wrapAndRender } from "@src/shared/helpers/jest/render";
import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import * as React from "react";

const navigateMock = jest.fn();
const detailTestProps = {
  navigation: {
    navigate: navigateMock,
  },
  route: {
    params: { drink: drinksListMock[0] },
  },
};

describe("Details Page", () => {
  it("matches snapshot", () => {
    const { toJSON } = wrapAndRender(<DetailsPage {...detailTestProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("navigates back to search page when back button is pressed", async () => {
    wrapAndRender(<DetailsPage {...detailTestProps} />);

    fireEvent.press(screen.getByText("Go Back"));

    await waitFor(() => expect(navigateMock).toHaveBeenCalledWith("Search"));
  });
});
