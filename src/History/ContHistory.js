import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "../shared/mainstyles";
import Itemcard from "../cards/Itemcard";

const ContHistory = () => {
  return (
    <SafeAreaView style={styles.vtouch}>
      {/* <ImageBackground
        source={require("../../assets/images/fairy.png")}
        style={{ flex: 1 }}
      > */}
      <ScrollView>
        <Itemcard />
      </ScrollView>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default ContHistory;
