import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import styles from "../shared/mainstyles";
import Input from "../shared/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
const Verification = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={{ padding: 20, marginTop: 75 }}>
          <Text style={styles.txt}>Welcome to wokaPay</Text>
          <View style={{ alignSelf: "center", marginTop: 15 }}>
            <Text style={styles.txtx}>Let's get started</Text>
          </View>
        </View>

        <View>
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
        </View>

        <View style={{ marginTop: 15, padding: 13 }}>
          <Text style={styles.txtx}>
            Kindly ensure that the information provided above is correct
          </Text>
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.text}>
              Your one time verification code will be sent
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "85%",
              marginLeft: 2,
              alignSelf: "center",
            }}
          >
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#f2e4da" : undefined}
            />

            <Text style={styles.text}>
              By sending you accept our terms of service and privacy policy
            </Text>
          </View>
        </View>

        <View style={{ marginTop: Platform.OS === "ios" ? 15 : 100 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("CodeVerify")}
          >
            <Text style={styles.btnTxt}>Send</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.text}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Verification;
