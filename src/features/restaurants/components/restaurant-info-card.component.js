import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
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
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
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
    <Card elevation={5}>
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
          <Address>{address}</Address>
        </Info>
      </Card.Content>
    </Card>
  );
};
