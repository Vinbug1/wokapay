import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoneHome from "../screens/LoneHome";
import { Platform } from "react-native";
import CustomSidebarMenu from "../screens/CustomSidebarMenu";
import Contribution from "../screens/Contribution";
import Loan from "../screens/Loan";
import Cable from "../utils/Cable";
import Power from "../utils/Power";
import TopUp from "../utils/TopUp";

const Drawer = createDrawerNavigator();
const SideNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="LoneHome"
      screenOptions={{
        drawerStyle: { backgroundColor: "#FCDEBD", width: "55%" },
        headerStyle: { backgroundColor: "#f79b39" },
        drawerActiveBackgroundColor: "#f79b39",
        drawerInactiveBackgroundColor: "#FCDEBD",
        drawerLabelStyle: {
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          alignItems: "center",
          alignSelf: "center",
          //marginTop: 40,
        },
        drawerItemStyle: {
          //height: "40%",
          width: "120%",
          left: "-10%",
          top: Platform.OS === "ios" ? "-21%" : "-15%",
        },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={LoneHome}
        options={{
          headerTintColor: "white",
          headerTitle: () => null,
          // marginTop: 40,
        }}
      />
      <Drawer.Screen
        name="Contribution"
        component={Contribution}
        options={{
          headerTintColor: "white",
          headerTitle: () => null,
          // padding: 40,
        }}
      />
      <Drawer.Screen
        name="Loan"
        component={Loan}
        options={{
          headerTintColor: "white",
          headerTitle: () => null,
          // padding: 40,
        }}
      />
      <Drawer.Screen
        name="CableSubscription"
        component={Cable}
        options={{
          headerTintColor: "white",
          headerTitle: () => null,
          drawerLabel: () => null,
          // padding: 40,
        }}
      />
      <Drawer.Screen
        name="PurcahsPowerToken"
        component={Power}
        options={{
          headerTintColor: "white",
          headerTitle: () => null,
          drawerLabel: () => null,
          // padding: 40,
        }}
      />
      <Drawer.Screen
        name="TopUp"
        component={TopUp}
        options={{
          headerTintColor: "white",
          headerTitle: () => null,
          drawerLabel: () => null,
          // padding: 40,
        }}
      />
    </Drawer.Navigator>
  );
};

export default SideNavigation;
