import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../shared/mainstyles";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

const OtherService = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const offtoggleModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.wtouch}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ margin: 9.5 }}>
          <TouchableOpacity onPress={() => toggleModal()}>
            <View style={styles.kuimg}>
              <Fontisto name="cloud-down" size={25} color="black" />
              <Text>TopUp</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 9.5 }}>
          <TouchableOpacity>
            <View style={styles.kuimg}>
              <SimpleLineIcons name="cloud-upload" size={25} color="black" />
              <Text>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 9.5 }}>
          <TouchableOpacity>
            <View style={styles.kuimg}>
              <MaterialCommunityIcons
                name="hand-coin"
                size={25}
                color="black"
              />
              <Text>Loan</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            height: "25%",
            //Platform.OS === "ios" ? "25%" : "28%",
            width: "100%",
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
          <View style={{ marginTop: 25, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TopUpScreen")}
              style={styles.btnsmm}
            >
              <FontAwesome
                name="credit-card"
                size={45}
                color="black"
                style={{ alignSelf: "center" }}
              />
              <Text style={styles.txtsmm}>TopUp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => power()} style={styles.btnsmm}>
              <MaterialCommunityIcons
                name="lightning-bolt-outline"
                size={45}
                color="black"
                style={{ alignSelf: "center" }}
              />
              <Text style={styles.txtsmm}>Power</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => cable()} style={styles.btnsmm}>
              <MaterialCommunityIcons
                name="cable-data"
                size={45}
                color="black"
                style={{ alignSelf: "center" }}
              />
              <Text style={styles.txtsmm}>Cable</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OtherService;
