import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoritesContext
  );

  const isFavorite = () => {
    return favorites.find(res => res.placeId === restaurant.placeId);
  };

  const onPressHandler = () => {
    isFavorite() ? removeFromFavorites(restaurant) : addToFavorites(restaurant);
  };

  return (
    <FavoriteButton onPress={onPressHandler}>
      <AntDesign
        name={isFavorite() ? "heart" : "hearto"}
        size={35}
        color={isFavorite() ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
