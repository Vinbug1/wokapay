import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const NavigateImg = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "white" }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 30,
            backgroundColor: "black",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/images/userimg.png")} />
        </View>
        <View style={{ padding: 20 }}>
          <DrawerItemList {...props} />
        </View>
        <View>
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default NavigateImg;
