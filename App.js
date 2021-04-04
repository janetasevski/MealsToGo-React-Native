import React from "react";
import * as firebase from "firebase";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from './src/infrastructure/navigation';

const firebaseConfig = {
  apiKey: "xxx-rKO6YHTP1jzgzP-9Rk3AkiTHeo",
  authDomain: "mealstogo-xxx.firebaseapp.com",
  projectId: "mealstogo-xxx",
  storageBucket: "mealstogo-xxx.appspot.com",
  messagingSenderId: "xxx",
  appId: "1:xxx:web:b423446e864ef5585f94b8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
      </PaperProvider>
      <StatusBar style="auto" />
    </>
  );
}
