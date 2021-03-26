import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    if (user) loadFavorites(user.user.uid);
  }, [user]);

  useEffect(() => {
    if (user) saveFavorites(user.user.uid, favorites);
  }, [favorites]);

  const saveFavorites = async (userId, fav) => {
    try {
      const jsonValue = JSON.stringify(fav);
      await AsyncStorage.setItem(`@favorites+${userId}`, jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadFavorites = async (userId) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites+${userId}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onAddHandler = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const onRemoveHandler = (restaurant) => {
    const newFav = favorites.filter((item) => {
      return item.name !== restaurant.name;
    });
    setFavorites(newFav);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: onAddHandler,
        removeFromFavorites: onRemoveHandler,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
