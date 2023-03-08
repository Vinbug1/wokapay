import { View } from "react-native";
import React from "react";

import AnimatedInput from "react-native-animated-input";

const Input = (props) => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 18,
        }}
      >
        <AnimatedInput
          placeholder={props.placeholder}
          errorText="Error"
          onChangeText={props.onChangeText}
          value={props.value}
          styleInput={{ height: "37%" }}
          styleLabel={{ fontWeight: "600" }}
          styleBodyContent={{
            borderBottomWidth: 0.5,
            borderBottomColor: "black",
          }}
        />
      </View>
    </View>
  );
};

export default Input;
