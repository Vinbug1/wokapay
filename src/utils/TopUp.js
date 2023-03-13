import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const TopUp = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#f5ede4" }}>
      <View style={{ backgroundColor: "#f79325", margin: 16, height: 30 }}>
        <Text style={{ alignSelf: "center", margin: 6 }}>TopUp</Text>
      </View>
    </SafeAreaView>
  );
};

export default TopUp;
