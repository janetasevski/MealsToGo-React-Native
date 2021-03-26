import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { List, Avatar } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsScreen = ({ navigation }) => {
  const { logout, isLoadinng, user } = useContext(AuthenticationContext);

  if (isLoadinng) {
    return <ActivityIndicator />;
  }

  return (
    <SafeArea>
      <View style={styles.avatarContainer}>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Text style={styles.avatarText} >{user?.user?.email}</Text>
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
    fontFamily: "Oswald_400Regular"
  },
  settingsItem: {
    padding: 16,
  },
});
