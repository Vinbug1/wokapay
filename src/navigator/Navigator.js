import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import OnBoard from "../user/Onboard";
import SignIn from "../user/SignIn";
import SignUp from "../user/SignUp";
import CivilDetails from "../user/CivilDetails";
import Verification from "../screens/Verification";
import BankDetails from "../user/BankDetails";
import SideNavigation from "./SideNavigation";
import ResetPin from "../user/ResetPin";
import NextDetails from "../user/NextDetails";
import CodeVerify from "../user/CodeVerify";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboard"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="Onboard" component={OnBoard} /> */}
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPin" component={ResetPin} />
      <Stack.Screen name="CivilDetails" component={CivilDetails} />
      <Stack.Screen name="CodeVerify" component={CodeVerify} />
      <Stack.Screen name="BankDetails" component={BankDetails} />
      <Stack.Screen name="NextDetails" component={NextDetails} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="SideNavigation" component={SideNavigation} />
    </Stack.Navigator>
  );
};

export default Navigator;
