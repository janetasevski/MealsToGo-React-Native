import React, { useState } from "react";
import styled from 'styled-components/native';
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';


const SearchContainer = styled.View`
  padding: 16px
`;
const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;
const SafeArea = styled.SafeAreaView`
  flex: 1;
  marginTop: ${StatusBar.currentHeight};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
}
