import React from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useHistory } from "react-router-native";
export const Register = () => {
  let history = useHistory();
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [message, setMessage] = React.useState([]);
  const [sucess, setSucess] = React.useState([]);
  // Some mensagem após um tempo
  setTimeout(() => {
    setMessage("");
    setSucess("");
  }, 8000);
  async function handlePress() {
    let response = await fetch(
      "https://cryptic-cove-48758.herokuapp.com/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.message != "Usuario já cadastrado") {
          setSucess("Usuário Criado com Sucesso!!!");
        } else {
          setMessage(json.message);
        }
      });
  }
  return (
    <KeyboardAvoidingView style={styles.tela} behavior="padding">
      <View style={{ display: "flex", width: "100%", marginLeft: 50 }}>
        <Icon
          name="arrow-left"
          size={24}
          color="white"
          onPress={() => history.push("/")}
        />
      </View>
      <Image
        style={styles.img}
        source={require("../images/cat_logo.png")}
      ></Image>
      <Text style={{ color: "red" }}>{message}</Text>
      <Text style={{ color: "green" }}>{sucess}</Text>
      <Input
        style={styles.itens}
        placeholder="Username"
        inputStyle={{ color: "white" }}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        style={styles.itens}
        textContentType="password"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Cadastrar"
        buttonStyle={{ backgroundColor: "white", width: 250, height: 80 }}
        titleStyle={{ color: "black" }}
        type="solid"
        onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  tela: {
    backgroundColor: "black",
    height: "100%",
    display: "flex",
    justifyContent: "center", // X //
    alignItems: "center", // Y //
  },
  itens: {
    margin: 10,
  },
  img: {
    width: 200,
    height: 200,
  },
  message: {
    color: "red",
  },
});
