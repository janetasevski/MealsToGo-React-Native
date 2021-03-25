import React from "react";
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
      <Title>Meals To Go</Title>
      <AccountContainer>
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
