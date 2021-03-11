import React from "react";
import { StyleSheet, View, Image, ActivityIndicator } from "react-native";
import { Button, Text } from "react-native-elements";
import { useHistory } from "react-router-native";
import { GlobaContext } from "./GlobalContext";

export const Home = () => {
  let history = useHistory();
  const [kitty, setKitty] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [didMount, setDidMount] = React.useState(false);
  const { username } = React.useContext(GlobaContext);
  React.useEffect(() => {
    setDidMount(true);
    handlePress();
    return () => setDidMount(false);
  }, []);
  async function handlePress() {
    setLoading(true);
    await fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-api-key": "3e83ed43-d8c8-4980-bf48-7692e1d19cbc",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setKitty(json[0].url);
        setLoading(false);
      });
  }
  if (!didMount) {
    return null;
  }
  return (
    <View style={styles.tela}>
      <View
        style={{
          width: "100%",
          display: "flex",
          height: 70,
          justifyContent: "flex-end",
          marginLeft: 75,
        }}
      >
        <Text style={{ color: "white" }}>
          Account:<Text style={{ color: "green" }}>{username}</Text>
        </Text>
      </View>

      <View style={styles.cat}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Image
            style={{ height: "95%", width: "95%", borderRadius: 20 }}
            source={{ url: kitty }}
          ></Image>
        )}
      </View>
      <Text
        onPress={() => history.push("/")}
        style={{
          color: "white",
          marginLeft: 240,
          marginTop: 10,
          fontSize: 20,
        }}
      >
        Logout
      </Text>
      <Button
        onPress={handlePress}
        title="Generate Cat"
        type="solid"
        buttonStyle={{
          backgroundColor: "gray",
          width: 300,
          margin: 15,
          height: 100,
          borderRadius: "50%",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cat: {
    backgroundColor: "white",
    height: "60%",
    width: "80%",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  tela: {
    backgroundColor: "black",
    height: "100%",
    alignItems: "center",
  },
});
