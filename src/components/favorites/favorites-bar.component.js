import React from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
  padding-top: 0px;
`;
const CompactRestaurantContainer = styled.View`
  margin-right: 10px;
`;

export const FavoritesBar = ({ favorites, navigation }) => {
  if (!favorites.length) {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>There is no favorites jet!</Text>
      </View>
    );
  }

  return (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((rst) => {
          const key = rst.name.split(" ").join("");
          return (
            <CompactRestaurantContainer key={key}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: rst })
                }
              >
                <CompactRestaurantInfo restaurant={rst} />
              </TouchableOpacity>
            </CompactRestaurantContainer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
