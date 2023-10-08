import styled from "@emotion/native";
import { Drink } from "@src/modules/drinks/Drink.type";
import { DrinkRowCard } from "@src/modules/drinks/DrinkRowCard";
import { SearchScreenProps } from "@src/navigation/Navigator.interface";
import { IconButton } from "@src/shared/view/components/IconButton/IconButton.component";
import { ScreenTemplate } from "@src/shared/view/components/ScreenTemplate/ScreenTemplate.component";
import { Spacer } from "@src/shared/view/components/Spacer/Spacer.component";
import { LeftArrowIcon } from "@src/shared/view/icons/LeftArrow.icon";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

import { Searchbar } from "react-native-paper";

async function getDrinks(
  text: string,
  setData: React.Dispatch<React.SetStateAction<Drink[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + text,
    );
    const json = await response.json();
    setData(json.drinks);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

export const SearchPage = ({ navigation }: SearchScreenProps) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Drink[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getDrinks("punch", setData, setLoading);
  }, []);

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
          getDrinks(text, setData, setLoading);
        }}
        value={input}
      />
      <StatusBar />
      <DrinksList>
        {isLoading ? (
          <ActivityIndicator testID="loader" />
        ) : (
          <>
            <Spacer vertical={10} />
            {data
              ? data.map((drink) => {
                  return (
                    <View key={`${drink.idDrink}-${drink.strDrink}`}>
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
