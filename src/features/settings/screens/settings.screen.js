import React, { useContext, useCallback, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";

import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { logout, isLoadinng, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  useFocusEffect(
    useCallback(() => {
      if (user) {
        getProfilePicture(user.user.uid);
      }
    }, [user])
  );

  const getProfilePicture = async (userId) => {
    const photoUri = await AsyncStorage.getItem(`${userId}-photo`);
    setPhoto(photoUri);
  };

  if (isLoadinng) {
    return <ActivityIndicator />;
  }

  return (
    <SafeArea>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image size={180} source={{ uri: photo }} />
          )}
        </TouchableOpacity>
        <Text style={styles.avatarText}>{user?.user?.email}</Text>
      </View>
      <List.Section>
        <List.Item
          style={styles.settingsItem}
          title="Favorites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <List.Item
          style={styles.settingsItem}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={logout}
        />
      </List.Section>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  avatarText: {
    marginTop: 10,
    fontFamily: "Oswald_400Regular",
  },
  settingsItem: {
    padding: 16,
  },
});
