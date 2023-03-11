import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "../shared/mainstyles";
import Itemcard from "../cards/Itemcard";

const FeedBack = () => {
  return (
    <SafeAreaView style={styles.vtouch}>
      <ScrollView>
        <Itemcard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedBack;
