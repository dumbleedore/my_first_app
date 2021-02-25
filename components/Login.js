import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
export const Login = () => {
  return (
    <View style={styles.tela}>
      <View style={styles.login}>
        <View style={styles.viewimg}>
          <Image
            style={styles.img}
            source={require("../images/cat_logo.png")}
          ></Image>
        </View>
        <Text h2>CatNap</Text>
        <Input
          placeholder="Username"
          maxLength={12}
          style={{ margin: 15 }}
          leftIcon={<Icon name="user" size={24} />}
        />
        <Input
          style={{ margin: 15 }}
          placeholder="Password"
          maxLength={12}
          secureTextEntry="true"
          leftIcon={<Icon name="lock" size={24} />}
        />
        <Button
          title="Entrar"
          buttonStyle={{ backgroundColor: "black", width: 250, height: 80 }}
          type="solid"
        />
      </View>
    </View>
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
