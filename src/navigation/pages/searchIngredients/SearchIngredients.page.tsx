import { IngredientRowCard } from "@src/modules/ingredients/view/components/IngredientRowCard";
import { useGetIngredients } from "@src/modules/ingredients/view/useGetIngredients";
import { SearchIngredientsScreenProps } from "@src/navigation/Navigator.interface";
import { IconButton } from "@src/shared/view/components/IconButton/IconButton.component";
import { ScreenTemplate } from "@src/shared/view/components/ScreenTemplate/ScreenTemplate.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { LeftArrowIcon } from "@src/shared/view/icons/LeftArrow.icon";
import React, { useState } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

import { Searchbar } from "react-native-paper";

const SearchIngredientsPage = ({
  navigation,
}: SearchIngredientsScreenProps) => {
  const [input, setInput] = useState("");
  const { data: ingredients, isLoading } = useGetIngredients({
    ingredientName: input,
  });

  return (
    <ScreenTemplate>
      <Searchbar
        icon={{
          uri: "https://cdn-icons-png.flaticon.com/512/3076/3076134.png",
        }}
        // eslint-disable-next-line react-native/no-inline-styles, react-native/no-color-literals
        style={{ margin: 24, backgroundColor: "lightgrey" }}
        placeholder="Search"
        onChangeText={(text) => {
          setInput(text);
        }}
        value={input}
      />
      <StatusBar />
      <Spacer vertical={20} />
      <IconButton
        Icon={LeftArrowIcon} // New button to navigate to ingredients search mode
        onPress={() => {
          navigation.navigate("Search");
        }}
        accessibilityLabel="Go to ingredient mode"
      />
      <Spacer vertical={10} />
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          {ingredients
            ? ingredients.map((ingredient) => (
                <IngredientRowCard
                  key={ingredient.id}
                  ingredient={ingredient}
                />
              ))
            : null}
        </View>
      )}
      <Spacer vertical={20} />
    </ScreenTemplate>
  );
};

export default SearchIngredientsPage;
