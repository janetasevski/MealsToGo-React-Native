import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
import { Loader } from "../../../components/utility/loader.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

import { FadeView } from '../../../components/animations/fade.animation';

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const onPressHandler = (restaurant) => {
    navigation.navigate("RestaurantDetail", { restaurant });
  };

  const restaurantList = isLoading ? (
    <Loader />
  ) : (
    <FadeView>
    <RestaurantList
      data={restaurants}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressHandler(item)}>
          <RestaurantInfoCard restaurant={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
    </FadeView>
  );

  return (
    <SafeArea>
      <Search
        isFavoriteToggle={isToggled}
        onFavoriteToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavoritesBar favorites={favorites} navigation={navigation} />}
      {restaurantList}
    </SafeArea>
  );
};
