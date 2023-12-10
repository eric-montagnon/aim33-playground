import styled from "@emotion/native";
import { DrinkRowCard } from "@src/modules/drinks/view/components/DrinkRowCard";
import { useGetDrinks } from "@src/modules/drinks/view/useGetDrinks";
import { SearchScreenProps } from "@src/navigation/Navigator.interface";
import { IconButton } from "@src/shared/view/components/IconButton/IconButton.component";
import { ScreenTemplate } from "@src/shared/view/components/ScreenTemplate/ScreenTemplate.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { LeftArrowIcon } from "@src/shared/view/icons/LeftArrow.icon";
import React, { useState } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

import { Searchbar } from "react-native-paper";

export const SearchPage = ({ navigation }: SearchScreenProps) => {
  const [input, setInput] = useState("punch");
  const { data: data2, isLoading: isLoading2 } = useGetDrinks({
    drinkName: input,
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
          navigation.navigate("SearchIngredients");
        }}
        accessibilityLabel="Go to ingredient mode"
      />
      <DrinksList>
        {isLoading2 ? (
          <View>
            <Spacer vertical={10} />
            <ActivityIndicator testID="loader" />
            <Spacer vertical={10} />
          </View>
        ) : (
          <>
            <Spacer vertical={10} />
            {data2
              ? data2.map((drink) => {
                  return (
                    <View key={`${drink.id}-${drink.name}`}>
                      <DrinkRowCard
                        drink={drink}
                        onPress={() => {
                          navigation.navigate("Details", { drink });
                        }}
                      />
                      <Spacer vertical={10} />
                    </View>
                  );
                })
              : null}
          </>
        )}
      </DrinksList>
      <Spacer vertical={20} />
      <IconButton
        Icon={LeftArrowIcon}
        onPress={() => {
          navigation.navigate("Welcome");
        }}
        accessibilityLabel="Go Back"
      />
    </ScreenTemplate>
  );
};

const DrinksList = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.primary500,
  paddingHorizontal: 10,
  borderRadius: 10,
  shadowColor: theme.colors.black,
  shadowRadius: theme.spaces.xxs,
  shadowOffset: {
    height: 3,
    width: 0,
  },
  shadowOpacity: 0.3,
}));
