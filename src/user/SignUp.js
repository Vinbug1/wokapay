import {
  Platform,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "../shared/mainstyles";
//import { Picker } from "@react-native-picker/picker";
import Input from "../shared/input";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import genders from "../shared/dropdown/Gender";
import states from "../shared/dropdown/State";
import lgas from "../shared/dropdown/Lga";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [state, setState] = useState();
  const [lga, setLGA] = useState();
  const [address, setAddress] = useState();

  const renderGender = (genders) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{genders.name}</Text>
        {genders.name === genders.name && (
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
  const renderState = (states) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{states.name}</Text>
        {states.name === states.name && (
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
  const renderLga = (lgas) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{lgas.name}</Text>
        {lgas.name === lgas.name && (
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
      <View>
        <TouchableOpacity onPress={navigation.goBack} style={styles.iconi}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 15 : 20,
        }}
      >
        <Text style={{ marginTop: 20, padding: 9 }}>Let's go</Text>
        <View style={{ alignSelf: "center" }}>
          <Text>personal Details</Text>
        </View>
        <KeyboardAwareScrollView>
          <View style={{ margin: 5 }}>
            <Input
              placeholder="first name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <Input
              placeholder="middle name"
              value={middleName}
              onChangeText={(text) => setMiddleName(text)}
            />
            <Input
              placeholder="last name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={genders}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="gender"
              searchPlaceholder="Search..."
              value={gender}
              onChange={(genders) => {
                setGender(genders.name);
              }}
              renderItem={renderGender}
            />

            <Input
              placeholder="phone number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
            <Input
              placeholder="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              placeholder="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={states}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="state"
              searchPlaceholder="Search..."
              value={state}
              onChange={(states) => {
                setState(states.name);
              }}
              renderItem={renderState}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={lgas}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="lga"
              searchPlaceholder="Search..."
              value={lga}
              onChange={(lgas) => {
                setLGA(lgas.name);
              }}
              renderItem={renderLga}
            />
            <Input
              placeholder="Address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.text}>
              Kindly ensure the information provided is same as your NIN
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("CivilDetails")}
          >
            <Text style={styles.btnTxt}>Proceed</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
