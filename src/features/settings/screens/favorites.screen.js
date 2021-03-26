import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Text, FlatList } from "react-native";

import { FavoritesContext } from "../../../services/favorites/favorites.context";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const FavoriteScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  const onPressHandler = (restaurant) => {
    navigation.navigate("RestaurantDetail", { restaurant });
  };

  return (
    <SafeArea>
      {!favorites.length ? (
        <Text style={styles.noFav}>No favoites yet</Text>
      ) : (
        <FlatList
          contentContainerStyle={{ padding: 16 }}
          data={favorites}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPressHandler(item)}>
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  spacer: {
    paddingTop: 16,
  },
  noFav: {
    textAlign: "center",
    fontFamily: "Lato_400Regular",
    fontSize: 20,
    paddingTop: 100,
  },
});
