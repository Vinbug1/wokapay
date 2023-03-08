import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox } from "react-native";
import OnBoarding from "./src/user/Onboard";
//import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import SideNavigation from "./src/navigator/SideNavigation";
import Navigator from "./src/navigator/Navigator";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigator />
      {/* <OnBoarding /> */}
      {/* <SideNavigation /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
