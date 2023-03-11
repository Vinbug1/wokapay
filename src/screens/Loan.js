import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../shared/mainstyles";
import { AntDesign } from "react-native-vector-icons";

const Loan = () => {
  return (
    <View>
      <Text>Loan</Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewPatient")}
          style={styles.fab}
        >
          <AntDesign name="addusergroup" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loan;

const styles = StyleSheet.create({});
