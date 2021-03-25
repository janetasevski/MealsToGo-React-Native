import React, { useState, useContext, useEffect } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountContainer,
  AccountCover,
  AuthButton,
  BackButton,
  Background,
  EmailInput,
  ErrorText,
  PasswordInput,
  Title
} from "../components/account.styles";
import { Loader } from "../../../components/utility/loader.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading, clearError } = useContext(AuthenticationContext);

  useEffect(() => {
    clearError();
  }, []);

  const isInvalid = () => {
    return email === "" || password === "";
  };

  return (
    <Background>
      <AccountCover />
      
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title>Login</Title>
          <AccountContainer>
            <EmailInput value={email} onChangeText={(email) => setEmail(email)} />
            <Spacer variant="top.medium" />
            <PasswordInput
              value={password}
              onChangeText={(pass) => setPassword(pass)}
              require
            />
            <Spacer variant="top.small" />
            {error && <ErrorText>{error}</ErrorText>}
            <Spacer variant="top.medium" />
            <AuthButton
              icon="lock-open-outline"
              disabled={isInvalid()}
              onPress={() => login(email, password)}
            >
              Login
            </AuthButton>
            <Spacer variant="top.large" />
            <BackButton
              icon="arrow-left-bold-outline"
              onPress={() => navigation.goBack()}
            >
              Back
            </BackButton>
          </AccountContainer>
        </>
      )}
    </Background>
  );
};
