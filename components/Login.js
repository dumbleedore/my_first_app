import React from "react";
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobaContext } from "./Context/GlobalContext";
import { useHistory } from "react-router-native";
import { InputLogin, InputPassword } from "./Input/Inputs.js";
export const Login = () => {
  const { username, setUsername, password, setPassword } = React.useContext(
    GlobaContext
  );
  const [loading, setLoading] = React.useState(false);

  const [message, setMessage] = React.useState([]);

  async function handlePress() {
    setLoading(true);
    let response = await fetch(
      "https://cryptic-cove-48758.herokuapp.com/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "Username ou Senha incorretos") {
          setLoading(false);
          setMessage(json.message);
        } else {
          setLoading(false);
          history.push("/Home");
        }
      });
  }
  let history = useHistory();
  if (loading) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView style={styles.tela} behavior="padding">
      <View style={styles.login}>
        <View style={styles.viewimg}>
          <Image
            style={styles.img}
            source={require("../images/cat_logo.png")}
          ></Image>
        </View>
        <Text h2>CatNap</Text>
        <Text style={{ color: "red" }}>{message}</Text>
        <InputLogin
          placeholder="Username"
          icon={<Icon name="user" size={24} />}
          function={setUsername}
        />
        <InputPassword
          placeholder="Password"
          icon={<Icon name="lock" size={24} />}
          function={setPassword}
        />
        <View style={{ display: "flex", width: "90%" }}>
          <Text
            style={{ fontSize: 15, marginBottom: 10 }}
            onPress={() => history.push("/Register")}
          >
            Register?
          </Text>
        </View>
        <Button
          title="Entrar"
          buttonStyle={{
            backgroundColor: "black",
            width: 250,
            height: 50,
          }}
          type="solid"
          onPress={handlePress}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  tela: {
    backgroundColor: "black",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    backgroundColor: "white",
    height: "80%",
    width: "90%",
    minHeight: "80%",
    borderRadius: 20,
    alignItems: "center",
  },
  viewimg: {
    height: 200,
    width: 200,
  },
  img: {
    width: 200,
    height: 200,
  },
});
