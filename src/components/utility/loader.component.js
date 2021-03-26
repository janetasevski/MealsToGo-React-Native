import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

export const Loader = () => {
  const Load = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Load>
      <ActivityIndicator size={50} animating={true} color={Colors.red800} />
    </Load>
  );
}