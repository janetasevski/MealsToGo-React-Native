import React, { useState, createContext } from "react";

import {
  loginRequest,
  createUserRequest,
  logout,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLoginHandler = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const onRegisterHandler = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Password and repeated password not match");
      return;
    }
    setIsLoading(true);
    createUserRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const onLogoutHandler = () => {
    setIsLoading(true);
    logout().then(() => {
      setUser(null);
      setError(null);
      setIsLoading(false);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
        login: onLoginHandler,
        register: onRegisterHandler,
        logout: onLogoutHandler,
        clearError: () => setError(null),
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
