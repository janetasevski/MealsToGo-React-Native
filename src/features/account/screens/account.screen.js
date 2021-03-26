import React from "react";
import { View, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";

import {
  Background,
  AccountCover,
  AccountContainer,
  AuthButton,
  RegisterButton,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <AccountCover />
      <View style={styles.animation}>
        <LottieView
          source={require("../../../../assets/watermelon.json")}
          loop
          autoPlay
        />
      </View>
      <Title>Meals To Go</Title>
      <AccountContainer style={styles.accountContainer}>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer variant="top.large" />
        <RegisterButton onPress={() => navigation.navigate("Register")}>
          Register
        </RegisterButton>
      </AccountContainer>
    </Background>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: "100%",
    height: "50%",
    position: "absolute",
    top: 20,
  },
  accountContainer: {
    width: "70%",
  }
});
