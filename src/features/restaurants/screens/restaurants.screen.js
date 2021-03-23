import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
import { Loader } from "../../../components/utility/loader.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const onPressHandler = (restaurant) => {
    navigation.navigate("RestaurantDetail", { restaurant });
  };

  const restaurantList = isLoading ? (
    <Loader />
  ) : (
    <RestaurantList
      data={restaurants}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressHandler(item)}>
          <RestaurantInfoCard restaurant={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );

  return (
    <SafeArea>
      <Search />
      {restaurantList}
    </SafeArea>
  );
};
