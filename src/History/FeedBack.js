import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "../shared/mainstyles";
import Itemcard from "../cards/Itemcard";

const FeedBack = () => {
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

export default FeedBack;
