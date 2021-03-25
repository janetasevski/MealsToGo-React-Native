import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigation } from "./app.navigator";
import { AccountNavigation } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigation /> : <AccountNavigation />}
    </NavigationContainer>
  );
};
