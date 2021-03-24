import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favorite } from "../../../components/favorites/favorite.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  Info,
  StyledTitle,
  Address,
  RatingOpenSection,
  RatingSection,
  OpenSection,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<SvgXml key={i} xml={star} width={20} height={20} />);
  }

  const tempClose = isClosedTemporarily ? (
    <Text variant="error">CLOSED TEMPORARILY</Text>
  ) : null;

  const openIcon = isOpenNow ? (
    <SvgXml xml={open} width={20} height={20} />
  ) : null;

  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Info>
          <StyledTitle>{name}</StyledTitle>
          <RatingOpenSection>
            <RatingSection>{stars}</RatingSection>
            <OpenSection>
              {tempClose}
              <Spacer variant="left.large" />
              {openIcon}
              <Spacer variant="left.large" />
              <Icon source={{ uri: icon }} />
            </OpenSection>
          </RatingOpenSection>
          <Address>{vicinity}</Address>
        </Info>
      </Card.Content>
    </RestaurantCard>
  );
};
