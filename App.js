import React from "react";

import { NativeRouter, Route, Switch } from "react-router-native";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { GlobalStorage } from "./components/GlobalContext";
export default function App() {
  return (
    <GlobalStorage>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </NativeRouter>
    </GlobalStorage>
  );
}
