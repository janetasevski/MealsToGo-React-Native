import React, { useContext, useState, useEffect } from "react";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { ActivityIndicator, Colors } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountContainer,
  AccountCover,
  RegisterButton,
  BackButton,
  Background,
  EmailInput,
  ErrorText,
  PasswordInput,
  Title,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { register, isLoading, error, clearError } = useContext(
    AuthenticationContext
  );

  useEffect(() => {
    clearError();
  }, []);

  const isInvalid = () => {
    return email === "" || password === "" || password !== repeatedPassword;
  };

  return (
    <Background>
      <AccountCover />

      <Title>Register</Title>
      <AccountContainer>
        <EmailInput value={email} onChangeText={(email) => setEmail(email)} />
        <Spacer variant="top.medium" />
        <PasswordInput
          label="Password"
          value={password}
          onChangeText={(pass) => setPassword(pass)}
        />
        <Spacer variant="top.small" />
        <PasswordInput
          label="Repeat Password"
          value={repeatedPassword}
          onChangeText={(rpass) => setRepeatedPassword(rpass)}
        />
        <Spacer variant="top.small" />
        {error && <ErrorText>{error}</ErrorText>}
        <Spacer variant="top.medium" />
        {isLoading ? (
          <ActivityIndicator color={Colors.red400} />
        ) : (
          <>
            <RegisterButton
              disabled={isInvalid()}
              onPress={() => register(email, password, repeatedPassword)}
            >
              Register
            </RegisterButton>
            <Spacer variant="top.large" />
            <BackButton
              icon="arrow-left-bold-outline"
              color={colors.brand.primary}
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
