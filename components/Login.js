import React from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { Use } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobaContext } from "./GlobalContext";
import { Redirect, useHistory } from "react-router-native";
export const Login = () => {
  const { username, setUsername, password, setPassword } = React.useContext(
    GlobaContext
  );

  const [message, setMessage] = React.useState([]);
  setTimeout(() => {
    setMessage("");
  }, 8000);
  async function handlePress() {
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
          setMessage(json.message);
        } else {
          history.push("/Home");
        }
      });
  }
  let history = useHistory();
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
        <Input
          placeholder="Username"
          maxLength={12}
          style={{ margin: 15 }}
          leftIcon={<Icon name="user" size={24} />}
          onChangeText={(text) => setUsername(text)}
        />

        <Input
          placeholder="Password"
          maxLength={12}
          style={{ margin: 15 }}
          secureTextEntry={true}
          leftIcon={<Icon name="lock" size={24} />}
          onChangeText={(text) => setPassword(text)}
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
