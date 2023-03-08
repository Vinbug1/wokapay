import {
  Platform,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "../shared/mainstyles";
//import { Picker } from "@react-native-picker/picker";
import Input from "../shared/input";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import genders from "../shared/dropdown/Gender";
import relationships from "../shared/dropdown/Relationshipt";
import occupations from "../shared/dropdown/Occupation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const NextDetails = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [relationship, setRelationship] = useState();
  const [garantorFirstName, setGarantorFirstName] = useState();
  const [garantorLastName, setGarantorLastName] = useState();
  const [garantorphone, setGarantorPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [occupation, setOccupation] = useState();

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
  const renderRelationship = (relationships) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{relationships.name}</Text>
        {relationships.name === relationships.name && (
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
  const renderOccupation = (occupations) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{occupations.name}</Text>
        {occupations.name === occupations.name && (
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
      <TouchableOpacity onPress={navigation.goBack} style={styles.iconi}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView style={{ marginTop: Platform.OS === "ios" ? 0 : 30 }}>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ padding: 9, fontWeight: "bold" }}>Other Details</Text>
        </View>
        <KeyboardAwareScrollView>
          <Text style={{ padding: 9, fontWeight: "bold" }}>Next of Kin</Text>
          <View style={{ margin: 5 }}>
            <Input
              placeholder="first name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
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

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={relationships}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="relationship"
              searchPlaceholder="Search..."
              value={relationship}
              onChange={(relationships) => {
                setRelationship(relationships.name);
              }}
              renderItem={renderRelationship}
            />
            <Input
              placeholder="phone number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text style={{ padding: 9, fontWeight: "bold" }}>
              Garantor's Form:
            </Text>
            <Input
              placeholder="first name"
              value={garantorFirstName}
              onChangeText={(text) => setGarantorFirstName(text)}
            />

            <Input
              placeholder="last name"
              value={garantorLastName}
              onChangeText={(text) => setGarantorLastName(text)}
            />

            <Input
              placeholder="phone number"
              value={garantorphone}
              onChangeText={(text) => setGarantorPhone(text)}
            />
            <Input
              placeholder="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <Input
              placeholder="Address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={occupations}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="occupation"
              searchPlaceholder="Search..."
              value={occupation}
              onChange={(occupations) => {
                setOccupation(occupations.name);
              }}
              renderItem={renderOccupation}
            />
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("BankDetails")}
          >
            <Text style={styles.btnTxt}>Proceed</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NextDetails;
