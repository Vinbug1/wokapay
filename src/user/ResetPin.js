import React, { useEffect, useState } from "react";
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
import styles from "../shared/mainstyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";

const ResetPin = () => {
  const navigation = useNavigation();
  const [newEnteredPin, setNewEnteredPin] = useState("");
  const [confirmEnteredPin, setConfirmEnteredPin] = useState("");

  useEffect(() => {
    if (newEnteredPin.length != confirmEnteredPin) {
      console.log("pin did not match");
    } else {
      handleSubmitPress();
    }
  }, [newEnteredPin]);

  const handleSubmitPress = () => {
    let dataToSend = {
      pin: confirmEnteredPin,
      //email: userdetail.lastuser.useremail,
    };

    axios({
      method: "POST",
      //url: `${baseUrl}loginpin`,
      data: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + responseJson.data,
      },
    })
      .then((responseJson) => {
        if (responseJson.status === 200) {
          navigation.navigate("SignIn");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          style={styles.iconi}
          onPress={() => navigation.goBack("SignIn")}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView
        extraHeight={10}
        enableAutomaticScroll={true}
        style={{ marginTop: Platform.OS === "android" ? 25 : 15 }}
      >
        <View style={{ marginTop: 10 }}>
          <Image
            source={require("../../assets/images/pg-preview.png")}
            style={styles.uImg}
            resizeMode="contain"
          />
        </View>
        <View style={styles.reset}>
          <View style={{ alignSelf: "center", marginTop: 30 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>ResetPin</Text>
          </View>
          <View style={{ alignSelf: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "normal" }}>
              please enter new pin
            </Text>
          </View>
          <CodePin
            number={5}
            checkPinCode={(code) => setNewEnteredPin(code)}
            containerStyle={styles.codePin}
            pinStyle={styles.pinStyle}
            success={() => console.log("hurray!")}
            textStyle={{
              fontSize: 13,
              fontWeight: "bold",
              color: "black",
              textAlign: "left",
              padding: 6,
            }}
            text={"New pin"}
            keyboardType="numeric"
          />
          <CodePin
            number={5}
            checkPinCode={(code) => setConfirmEnteredPin(code)}
            containerStyle={styles.codePin}
            pinStyle={styles.pinStyle}
            success={() => console.log("hurray!")}
            textStyle={{
              fontSize: 13,
              fontWeight: "bold",
              color: "black",
              textAlign: "left",
              padding: 6,
            }}
            text={"Confirm pin"}
            keyboardType="numeric"
          />
          <View style={{ justifyContent: "center", marginTop: 29 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.btnTxt}>Reset pin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ResetPin;
