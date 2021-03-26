import React, { useState, useContext, useEffect } from "react";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { ActivityIndicator, Colors } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";
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
  Title,
} from "../components/account.styles";



export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading, clearError } = useContext(
    AuthenticationContext
  );

  useEffect(() => {
    clearError();
  }, []);

  const isInvalid = () => {
    return email === "" || password === "";
  };

  return (
    <Background>
      <AccountCover />
      <Title>Login</Title>
      <AccountContainer>
        <EmailInput value={email} onChangeText={(email) => setEmail(email)} />
        <Spacer variant="top.medium" />
        <PasswordInput
          label="Password"
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          require
        />
        <Spacer variant="top.small" />
        {error && <ErrorText>{error}</ErrorText>}
        <Spacer variant="top.medium" />
        {isLoading ? (
          <ActivityIndicator color={Colors.blue400} />
        ) : (
          <>
            <AuthButton
              icon="lock-open-outline"
              disabled={isInvalid()}
              onPress={() => login(email, password)}
            >
              Login
            </AuthButton>
            <Spacer variant="top.large" />
            <BackButton
              color={colors.ui.error}
              icon="arrow-left-bold-outline"
              onPress={() => navigation.goBack()}
            >
              Back
            </BackButton>
          </>
        )}
      </AccountContainer>
    </Background>
  );
};
