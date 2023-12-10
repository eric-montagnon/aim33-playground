import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import * as React from "react";

import { drinksListMock } from "@src/modules/drinks/infra/drink.mock";
import { SearchScreenProps } from "@src/navigation/Navigator.interface";
import { SearchPage } from "@src/navigation/pages/search/Search.page";
import { wrapAndRender } from "@src/shared/helpers/jest/render";
import nock from "nock";

const navigateMock = jest.fn();
const searchTestProps = {
  navigation: {
    navigate: navigateMock,
  },
} as unknown as SearchScreenProps;

describe("Sign up Page", () => {
  it("displays properly", async () => {
    const scope = nock("https://www.thecocktaildb.com/api/json/v1/1/search.php")
      .get("?s=punch")
      .reply(200, { drinks: drinksListMock });

    wrapAndRender(<SearchPage {...searchTestProps} />);

    await waitFor(() => expect(screen.getByText("GG")).toBeTruthy());

    expect(scope.isDone()).toBeTruthy();
    expect(screen).toMatchComponentSnapshot();
  });
  it("navigates to details page when clicking on button", async () => {
    nock("https://www.thecocktaildb.com/api/json/v1/1/search.php")
      .get("?s=punch")
      .reply(200, { drinks: drinksListMock });

    wrapAndRender(<SearchPage {...searchTestProps} />);

    await waitFor(() => expect(screen.getByText("GG")).toBeTruthy());

    fireEvent.press(screen.getByText("GG"));

    await waitFor(() =>
      expect(navigateMock).toHaveBeenCalledWith("Details", {
        drink: {
          category: "Ordinary Drink",
          id: "15997",
          ingredients: [
            { name: "Galliano", quantity: "2 1/2 shots " },
            { name: "Ginger ale", quantity: null },
            { name: "Ice", quantity: null },
            { name: null, quantity: null },
            { name: null, quantity: null },
            { name: null, quantity: null },
            { name: null, quantity: null },
            { name: null, quantity: null },
          ],
          instructions:
            "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
          name: "GG",
          thumb:
            "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
        },
      }),
    );
  });
});
