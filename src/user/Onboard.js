import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from ".././shared/mainstyles";
import { useNavigation } from "@react-navigation/native";
//import SignIn from "./SignIn";

const OnBoard = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../.././assets/images/onbodingImage.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{ marginTop: 110 }}>
        <Image
          source={require("../.././assets/images/money.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.onbtxt}>loan made easy</Text>
      </View>
      <View style={{ justifyContent: "center", margin: 5 }}>
        <Text style={styles.ontxt}>You are one step away from</Text>
        <Text style={styles.ontxt}>getting your loan</Text>
      </View>

      <View style={{ justifyContent: "center", marginTop: 45 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.btnTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default OnBoard;
