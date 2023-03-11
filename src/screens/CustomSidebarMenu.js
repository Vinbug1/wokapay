import React from "react";
import { View, Image, Text, ImageBackground, Linking } from "react-native";
import styles from ".././shared/mainstyles";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
const CustomSidebarMenu = (props) => {
  return (
    <View style={{ height: "99%" }}>
      <ImageBackground
        source={require("../../assets/images/onbodingImage.png")}
        resizeMode="cover"
        style={{ height: 190, width: "100%" }}
      >
        <Image
          source={require("../../assets/images/userimg.png")}
          style={styles.profileIcon}
        />
        <View style={{ padding: 8 }}>
          <View>
            <Text>Hi</Text>
          </View>
          <View>
            <Text>UserName</Text>
          </View>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        www.LoanApp.com
      </Text>
    </View>
  );
};

export default CustomSidebarMenu;
