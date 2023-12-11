import SearchIngredientsPage from "@src/navigation/pages/searchIngredients/SearchIngredients.page";
import { wrapAndRender } from "@src/shared/helpers/jest/render";
import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import * as React from "react";

const navigateMock = jest.fn();
const searchIngredientTestProps = {
  navigation: {
    navigate: navigateMock,
  },
};

describe("Search Ingredients Page", () => {
  it("matches snapshot", () => {
    const { toJSON } = wrapAndRender(
      <SearchIngredientsPage {...searchIngredientTestProps} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("navigates back to search page when back button is pressed", async () => {
    wrapAndRender(<SearchIngredientsPage {...searchIngredientTestProps} />);

    fireEvent.press(screen.getByText("Go to ingredient mode"));

    await waitFor(() => expect(navigateMock).toHaveBeenCalledWith("Search"));
  });
});
