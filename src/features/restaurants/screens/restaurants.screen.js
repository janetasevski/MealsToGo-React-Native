import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

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
      <RestaurantList
        data={[
          { name: "Restaurant 1" },
          { name: "Restaurant 2" },
          { name: "Restaurant 3" },
          { name: "Restaurant 4" },
        ]}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
