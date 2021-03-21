import { Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[0]};
`;
export const StyledTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding-top: ${(props) => props.theme.space[2]};
`;
export const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const RatingOpenSection = styled.View`
  flex-direction: row;
`;
export const RatingSection = styled.View`
  flex-direction: row;
`;
export const OpenSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Icon = styled.Image`
  width: 15px; 
  height: 15px;
`;