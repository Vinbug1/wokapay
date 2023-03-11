import { View, ScrollView } from "react-native";
import React from "react";
import SlidOption from "./SlidOption";
import OtherService from "./OtherService";
import FeedBack from "../History/FeedBack";
import ContHistory from "../History/ContHistory";
import LoanHistory from "../History/LoanHistory";
import SendingTransaction from "../History/SendingTransaction";
const LoneHome = () => {
  return (
    <View>
      <View style={{ alignSelf: "center", margin: 2 }}>
        <SlidOption />
      </View>
      <View>
        <OtherService />
      </View>
      <ScrollView
        contentContainerStyle={{ marginHorizontal: 1, marginTop: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <FeedBack />
        <ContHistory />
        <LoanHistory />
        <SendingTransaction />
      </ScrollView>
    </View>
  );
};

export default LoneHome;
