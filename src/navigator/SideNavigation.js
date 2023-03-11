import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoneHome from "../screens/LoneHome";
import { Platform } from "react-native";
import CustomSidebarMenu from "../screens/CustomSidebarMenu";

const Drawer = createDrawerNavigator();
const SideNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="LoneHome"
      screenOptions={{
        drawerStyle: { backgroundColor: "#FCDEBD", width: "50%" },
        headerStyle: { backgroundColor: "#f79b39" },
        drawerActiveBackgroundColor: "#f79b39",
        drawerInactiveBackgroundColor: "#FCDEBD",
        drawerLabelStyle: {
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          alignItems: "center",
          alignSelf: "center",
        },
        drawerItemStyle: {
          height: "75%",
          width: "120%",
          left: "-10%",
          top: Platform.OS === "ios" ? "-55%" : "-40%",
        },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="LoneHome"
        component={LoneHome}
        options={{
          headerTintColor: "white",
          headerTitle: () => null,
        }}
      />
      <Drawer.Screen
        name="Home"
        component={LoneHome}
        options={{
          headerTintColor: "white",
          headerTitle: () => null,
        }}
      />
    </Drawer.Navigator>
  );
};

export default SideNavigation;
