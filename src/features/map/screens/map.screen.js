import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Search } from "../components/search.component";
import { MapCollout } from "../components/map-collout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = location.viewport.northeast.lat;
    const southWest = location.viewport.southwest.lat;

    setLatDelta(northeastLat - southWest);
  }, [location]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <MapCollout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
