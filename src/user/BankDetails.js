import {
  Platform,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "../shared/mainstyles";
import Input from "../shared/input";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import banks from "../shared/dropdown/Bank";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const BankDetails = () => {
  const navigation = useNavigation();
  const [bank, setBank] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [bvn, setBVN] = useState();
  const [alternativeAccountNumber, setAlternativeAccountNumber] = useState();

  const renderBank = (banks) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{banks.name}</Text>
        {banks.name === banks.name && (
          <AntDesign
            style={styles.icon}
            color="black"
            // name="down-arrow"
            size={20}
          />
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={navigation.goBack} style={styles.iconi}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: Platform.OS === "ios" ? 40 : 65 }}>
        <View style={{ alignSelf: "center" }}>
          <Text>Bank details</Text>
        </View>
        <KeyboardAwareScrollView>
          <View style={{ margin: 5 }}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={banks}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="Bank"
              searchPlaceholder="Search..."
              value={bank}
              onChange={(banks) => {
                setBank(banks.name);
              }}
              renderItem={renderBank}
            />
            <Input
              placeholder="Account Number"
              value={accountNumber}
              onChangeText={(text) => setAccountNumber(text)}
            />
            <Input
              placeholder="card Number"
              value={cardNumber}
              onChangeText={(text) => setCardNumber(text)}
            />
            <Input
              placeholder="BVN"
              value={bvn}
              onChangeText={(text) => setBVN(text)}
            />

            <Input
              placeholder="Alternative Account Number"
              value={alternativeAccountNumber}
              onChangeText={(text) => setAlternativeAccountNumber(text)}
            />
          </View>
          <View style={{ alignSelf: "center", margin: 25 }}>
            <Text style={styles.text}>
              By proceeding you accept our terms of service and privacy policy
            </Text>
          </View>
          <View style={{ marginTop: 45 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Verification")}
            >
              <Text style={styles.btnTxt}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BankDetails;
