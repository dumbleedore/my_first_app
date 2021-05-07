import React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register.js";
import { GlobalStorage } from "./components/Context/GlobalContext";
import { Config } from "./components/Config.js";
export default function App() {
  return (
    <GlobalStorage>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/" component={Config} />
        </Switch>
      </NativeRouter>
    </GlobalStorage>
  );
}
