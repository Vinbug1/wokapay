import React, { useEffect, useState } from "react";
//import Icon from "react-native-vector-icons/Ionicons";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import CodePin from "react-native-pin-code";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styles from ".././shared/mainstyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CodeVerify = () => {
  const navigation = useNavigation();
  const [enteredPin, setEnteredPin] = useState("");

  useEffect(() => {
    if (enteredPin.length === 5) {
      handleSubmitPress();
    }
  }, [enteredPin]);

  const handleSubmitPress = () => {
    let dataToSend = { pin: enteredPin, email: userdetail.lastuser.useremail };

    axios({
      method: "POST",
      url: `${baseUrl}loginpin`,
      data: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + responseJson.data,
      },
    })
      .then((responseJson) => {
        if (responseJson.status === 200) {
          navigation.navigate("SideNavigation");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={30}
        enableAutomaticScroll={true}
        style={{ marginTop: Platform.OS === "android" ? 25 : 15 }}
      >
        <TouchableOpacity onPress={navigation.goBack} style={styles.iconi}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>
          <Image
            source={require("../../assets/images/verification.jpg")}
            style={styles.uImg}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginTop: 360, alignSelf: "center", marginRight: 42 }}>
          <CodePin
            number={5}
            checkPinCode={(code) => setEnteredPin(code)}
            containerStyle={styles.containerCodePin}
            pinStyle={styles.pinStyle}
            success={() => console.log("hurray!")}
            textStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
            text={"Verification Code"}
            keyboardType="numeric"
          />
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Didn't recieve? check your inboxor
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("ResetPin")}>
              <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ justifyContent: "center", marginTop: 102 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.btnTxt}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CodeVerify;
