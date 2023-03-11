import Icon from "react-native-vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import CodePin from "react-native-pin-code";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import axios from "axios";
import styles from ".././shared/mainstyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//import ResetPin from "./ResetPin";
//import ResetPin from "./ResetPin";

const SignIn = () => {
  const navigation = useNavigation();
  const [enteredPin, setEnteredPin] = useState("");
  const [isBiometricsSupported, setIsBiometricsSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricsSupported(compatible);
    })();
    if (enteredPin.length === 5) {
      handleSubmitPress();
    }
  }, [enteredPin]);

  const fallBackToDefaultAuth = () => {
    console.log("please use you pin or login authentication method ");
  };
  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isBiometricAvailable)
      return alertComponent(
        "Please enter you pin ",
        "Biometrics is not supported",
        "OK",
        () => fallBackToDefaultAuth()
      );
    let supportedBiometrics;
    supportedBiometrics =
      await LocalAuthentication.supportedAuthenticationTypesAsync();

    const saveBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!saveBiometrics)
      return alertComponent(
        "Biometric record not found",
        "pleaase signin with pin",
        "OK",

        () => fallBackToDefaultAuth()
      );
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Signin with Biometrics Authentication",
      cancelLabel: "Cancel Authentication",
      disableDevicefallBack: true,
    });
    if (biometricAuth) {
      TwoButtonAlert();
    }
    console.log({ isBiometricAvailable });
    console.log({ supportedBiometrics });
    console.log({ saveBiometrics });
    console.log({ biometricAuth });
  };

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
          navigation.navigate("LoneHome");
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
        <View style={{ margin: 20 }}>
          <Text>Hi</Text>
        </View>
        <View style={{ flexDirection: "column", marginTop: 30 }}>
          <Image
            //source={{
            // uri: image
            //   ? image
            //   : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUd2QNPAzLBXFWpGXejLlg5SIbeNcKMQ6Ng&usqp=CAU",
            //}}

            source={require("../.././assets/images/userimg.png")}
            style={styles.uimg}
            resizeMode="cover"
          />
        </View>
        <View style={{ marginTop: 150, alignSelf: "center", marginRight: 45 }}>
          <View style={{ alignSelf: "center" }}>
            <Text>Welcome</Text>
          </View>
          <CodePin
            number={5}
            checkPinCode={(code) => setEnteredPin(code)}
            containerStyle={styles.containerCodePin}
            pinStyle={styles.pinStyle}
            success={() => console.log("hurray!")}
            textStyle={{ fontSize: 20, fontWeight: "bold", color: "black" }}
            text={"Enter your pin"}
            keyboardType="numeric"
          />
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Forgot your pin?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("ResetPin")}>
              <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                Reset Pin
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center", marginTop: 25 }}>
            <TouchableOpacity onPress={() => handleBiometricAuth()}>
              <Icon name={"finger-print"} size={40} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", marginTop: 30, alignSelf: "center" }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Fingerprint
          </Text>
        </View>
        <View style={{ justifyContent: "center", marginTop: 45 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("SideNavigation")}
            //onPress={() => handleSubmitPress()}
          >
            <Text style={styles.btnTxt}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
