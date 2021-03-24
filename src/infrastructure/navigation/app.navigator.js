import React from 'react'
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen'

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
