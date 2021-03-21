import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { SafeArea } from './src/components/utility/safe-area.component';

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
};
const Map = () => {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name == "Restaurants") {
                    iconName = focused ? "restaurant" : "restaurant-outline";
                  } else if (route.name == "Settings") {
                    iconName = focused ? "settings" : "settings-outline";
                  } else if (route.name == "Map") {
                    iconName = focused ? "map" : "map-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </PaperProvider>
      <StatusBar style="auto" />
    </>
  );
}
