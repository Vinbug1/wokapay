import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../shared/mainstyles";
import { AntDesign, MaterialCommunityIcons } from "react-native-vector-icons";
import ReactCurvedText from "react-curved-text";
import { useNavigation } from "@react-navigation/native";
const Contribution = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Contribution</Text>
      <View
        style={{
          flexDirection: "column",
          alignSelf: "flex-end",
          justifyContent: "space-around",
        }}
      >
        <View style={{ top: -105, padding: 35 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewPatient")}
            style={styles.fab}
          >
            <MaterialCommunityIcons name="hand-coin" size={28} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>Pay</Text>
          </TouchableOpacity>
        </View>

        <View style={{ top: -80, padding: 25 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewPatient")}
            style={styles.fab}
          >
            <AntDesign name="addusergroup" size={25} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>Group</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Contribution;
