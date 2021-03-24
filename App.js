import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

import { TabNavigation } from "./src/infrastructure/navigation/app.navigator";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <TabNavigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </ThemeProvider>
      </PaperProvider>
      <StatusBar style="auto" />
    </>
  );
}
