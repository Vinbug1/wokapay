import {
  Platform,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../shared/mainstyles";
import Input from "../shared/input";
import React, { useState, useCallback, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import ministries from ".././shared/dropdown/Ministry";
import occupations from ".././shared/dropdown/Occupation";
import levels from ".././shared/dropdown/OccupationLevel";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

const CivilDetails = () => {
  const navigation = useNavigation();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [salary, setSalary] = useState();
  const [jobPosition, setJobPosition] = useState();
  const [ministry, setMinistry] = useState();
  const [jobLevel, setJobLevel] = useState();
  const [pickedImagePath, setPickedImagePath] = useState("");
  const [validId, setValidId] = useState();
  const [offerLetter, setOfferLetter] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const offtoggleModal = () => {
    setModalVisible(false);
  };

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
      toggleModal();
    }
  };

  const showIdPicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setValidId(result.uri);
      console.log(result.uri);
      toggleModal();
    }
  };
  const showAppointPicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setOfferLetter(result.uri);
      console.log(result.uri);
      toggleModal();
    }
  };
  //   const openCamera = async () => {
  //     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  //     if (permissionResult.granted === false) {
  //       alert("You've refused to allow this appp to access your camera!");
  //       return;
  //     }
  //     const result = await ImagePicker.launchCameraAsync();

  //     if (!result.cancelled) {
  //       setPickedImagePath(result.uri);
  //       toggleModal();
  //       console.log(result.uri);
  //     }
  //   };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    hideDatePicker();
    setDateOfBirth(date.toDateString());
  };
  const renderMinistry = (ministries) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{ministries.name}</Text>
        {ministries.name === ministries.name && (
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
  const renderOccupationLevel = (levels) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{levels.name}</Text>
        {levels.name === levels.name && (
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
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={navigation.goBack} style={styles.iconi}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: Platform.OS === "ios" ? 15 : 85 }}>
        <View style={{ alignSelf: "center" }}>
          <Text>Civil Service Details</Text>
          {/* <Text>personal Details</Text> */}
        </View>
        <KeyboardAwareScrollView>
          <View style={{ margin: 5 }}>
            <View>
              <View
                style={{
                  height: 50,
                  width: "90%",
                  borderBottomWidth: 0.5,
                  borderBottomColor: "black",
                  margin: 15,
                }}
              >
                <TouchableOpacity onPress={showDatePicker}>
                  <Text
                    style={{
                      fontWeight: "normal",
                    }}
                  >
                    Date of birth
                  </Text>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text>{dateOfBirth}</Text>
                  <AntDesign name="calendar" size={20} color="black" />
                </View>
              </View>
            </View>

            <Input
              placeholder="Monthly Renumeration"
              value={salary}
              onChangeText={(text) => setSalary(text)}
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
              value={jobPosition}
              onChange={(occupations) => {
                setJobPosition(occupations.name);
              }}
              renderItem={renderOccupation}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={ministries}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="ministry"
              searchPlaceholder="Search..."
              value={ministry}
              onChange={(ministries) => {
                setMinistry(ministries.name);
              }}
              renderItem={renderMinistry}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={levels}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="level"
              searchPlaceholder="Search..."
              value={jobLevel}
              onChange={(levels) => {
                setJobLevel(levels.name);
              }}
              renderItem={renderOccupationLevel}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={{ padding: 12 }}>
          <Text style={{ textAlign: "left", fontWeight: "bold" }}>
            kindly upload the following:
          </Text>
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 20,
              }}
            >
              <View>
                <View style={{ paddingLeft: Platform.OS === "ios" ? 15 : 21 }}>
                  <Text style={{ textAlign: "left", fontWeight: "normal" }}>
                    Passport:
                  </Text>
                </View>
                <View
                  style={{
                    //flex: 1,
                    paddingTop: 18,
                  }}
                >
                  <Image
                    source={{ uri: pickedImagePath }}
                    style={styles.umg}
                    resizeMode="contain"
                  />
                </View>
                <TouchableOpacity
                  style={styles.imgbtn}
                  onPress={() => toggleModal()}
                >
                  <Text style={styles.btnTxt}>Upload</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 95,
                    marginRight: 10,
                    marginTop: 10,
                    padding: 5,
                  }}
                >
                  <View style={styles.topview}>
                    {/* <Text>work</Text> */}
                    <Image
                      source={{ uri: validId }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.imbtn}
                    onPress={() => toggleModal()}
                  >
                    <Text style={styles.btnsxt}>ValidId</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 98,
                    marginRight: 10,
                    marginTop: 30,
                    padding: 5,
                  }}
                >
                  <View style={styles.topview}>
                    {/* <Text>work</Text> */}
                    <Image
                      source={{ uri: offerLetter }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.imbtn}
                    onPress={() => toggleModal()}
                  >
                    <Text style={styles.btnsxt}>AppLetter</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 118 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("NextDetails")}
              >
                <Text style={styles.btnTxt}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              height: "35%",
              //Platform.OS === "ios" ? "25%" : "28%",
              width: "80%",
              backgroundColor: "white",
              alignSelf: "center",
              borderRadius: 5,
            }}
          >
            <View>
              <TouchableOpacity onPress={() => offtoggleModal()}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: "15%" }}>
              {/* <TouchableOpacity
                onPress={() => openCamera()}
                style={styles.btnsm}
              >
                <Text style={styles.txtsm}>Camera</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => showImagePicker()}
                style={styles.btnsm}
              >
                <Text style={styles.txtsm}>Passport</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => showIdPicker()}
                style={styles.btnsm}
              >
                <Text style={styles.txtsm}>ValidID</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => showAppointPicker()}
                style={styles.btnsm}
              >
                <Text style={styles.txtsm}>OfferLetter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default CivilDetails;
