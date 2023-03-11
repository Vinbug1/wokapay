import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../user/SignIn";
import SignUp from "../user/SignUp";
import CivilDetails from "../user/CivilDetails";
import Verification from "../screens/Verification";
import BankDetails from "../user/BankDetails";
import SideNavigation from "./SideNavigation";
import ResetPin from "../user/ResetPin";
import NextDetails from "../user/NextDetails";
import CodeVerify from "../user/CodeVerify";
import TopUpScreen from "../screens/TopUpScreen";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPin" component={ResetPin} />
      <Stack.Screen name="CivilDetails" component={CivilDetails} />
      <Stack.Screen name="CodeVerify" component={CodeVerify} />
      <Stack.Screen name="BankDetails" component={BankDetails} />
      <Stack.Screen name="NextDetails" component={NextDetails} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="SideNavigation" component={SideNavigation} />
      <Stack.Screen name="TopUpScreen" component={TopUpScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
