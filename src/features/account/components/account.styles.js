import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";

export const Background = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  width: 80%;
`;

export const AuthButton = styled(Button).attrs({
  mode: "contained",
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const BackButton = styled(Button).attrs({
  mode: "contained",
  color: colors.ui.error,
})`
  padding: ${(props) => props.theme.space[1]};
  width: 95px;
  align-self: center;
`;

export const RegisterButton = styled(Button).attrs({
  icon: "account-box-outline",
  mode: "contained",
  color: colors.ui.error,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const EmailInput = styled(TextInput).attrs({
  mode: "flat",
  label: "E-mail",
  textContentType: "emailAddress",
  keyboardType: "email-address",
  autoCapitalize: "none",
})``;

export const PasswordInput = styled(TextInput).attrs({
  mode: "flat",
  label: "Password",
  textContentType: "password",
  secureTextEntry: true,
})``;

export const ErrorText = styled.Text`
  text-align: center;
  padding-top: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.error};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h3};
`;
