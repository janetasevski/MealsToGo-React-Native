import React from 'react';
import { Text } from 'react-native';
import { AccountCover, Background } from '../components/account.styles';

export const RegisterScreen = () => {
  return (
    <Background>
      <AccountCover />
      <Text>Register</Text>
    </Background>
  );
};