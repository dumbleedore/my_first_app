import React from "react";

import { NativeRouter, Route, Switch } from "react-router-native";
import { Login } from "./components/Login";
export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </NativeRouter>
  );
}
