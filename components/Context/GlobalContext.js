import React from "react";

export const GlobaContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [username, setUsername] = React.useState([]);
  const [password, setPassword] = React.useState([]);

  return (
    <GlobaContext.Provider
      value={{ username, setUsername, password, setPassword }}
    >
      {children}
    </GlobaContext.Provider>
  );
};
