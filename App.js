import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigator/Navigator";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={{ backgroundColor: "#FCDEBD" }} />
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
