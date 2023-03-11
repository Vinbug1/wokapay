import { SafeAreaView, Text, View, ScrollView } from "react-native";
import React from "react";
import styles from "../shared/mainstyles";
import Itemcard from "../cards/Itemcard";

const ContHistory = () => {
  return (
    <SafeAreaView style={styles.vtouch}>
      <ScrollView>
        <Itemcard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContHistory;
