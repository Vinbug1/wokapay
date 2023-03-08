import { View, Text, ScrollView } from "react-native";
import React from "react";
import SlidOption from "./SlidOption";
import OtherService from "./OtherService";
const LoneHome = () => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{ marginHorizontal: 2, marginTop: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <SlidOption />
      </ScrollView>
      <View>
        <OtherService />
      </View>
      <Text>LoneHome</Text>
    </View>
  );
};

export default LoneHome;
