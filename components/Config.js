import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useHistory } from "react-router-native";
export const Config = () => {
  const history = useHistory();
  return (
    <View style={styles.tela}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require("../images/cat_logo.png")}
        ></Image>
        <View style={styles.borda}>
          <Text onPress={() => history.push("/")} style={styles.texto}>
            Editar Usuário
          </Text>
        </View>
        <View style={styles.borda}>
          <Text onPress={() => history.push("/")} style={styles.texto}>
            Editar Senha Usuário
          </Text>
        </View>
        <View style={styles.borda}>
          <Text onPress={() => history.push("/")} style={styles.texto}>
            Excluir Conta
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tela: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  card: {
    backgroundColor: "white",
    height: "80%",
    width: "50%",
    margin: "auto",
    borderRadius: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: "2rem",
    margin: "1rem",
    color: "white",
  },
  borda: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: "2rem",
    backgroundColor: "#000",
    margin: "1rem",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
