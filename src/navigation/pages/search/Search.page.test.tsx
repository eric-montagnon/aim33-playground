import { screen, waitFor } from "@testing-library/react-native";
import * as React from "react";

import { drinksListMock } from "@src/modules/drinks/drink.mock";
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
});
