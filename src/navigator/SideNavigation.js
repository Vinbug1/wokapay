import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoneHome from "../screens/LoneHome";

const Drawer = createDrawerNavigator();
const SideNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="LoneHome" ScreenOp>
      <Drawer.Screen name="LoneHome" component={LoneHome} />
    </Drawer.Navigator>
  );
};

export default SideNavigation;
