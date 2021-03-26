import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen'
import { SettingsNavigator } from '../navigation/settings.navigator'

import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name == "Restaurants") {
                  iconName = focused
                    ? "restaurant"
                    : "restaurant-outline";
                } else if (route.name == "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                } else if (route.name == "Map") {
                  iconName = focused ? "map" : "map-outline";
                }
                return (
                  <Ionicons name={iconName} size={size} color={color} />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsNavigator}
            />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  )
}
