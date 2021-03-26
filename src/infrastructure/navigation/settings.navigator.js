import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoriteScreen } from "../../features/settings/screens/favorites.screen";

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Favorites" component={FavoriteScreen} />
    </Stack.Navigator>
  );
};
