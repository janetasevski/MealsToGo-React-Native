import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, [])

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites]);
  
  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (error) {
      console.log(error);
    }
  }

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        removeFromFavorites: onRemoveHandler
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
