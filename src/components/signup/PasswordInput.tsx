import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { bg_colors, text } from "../../theme/color.theme";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder="Enter password"
          style={styles.input_text}
          placeholderTextColor={"#000"}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          style={styles.eye_button}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <Image source={require("../../../assets/signin/eye_icon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  label: {
    fontFamily: "montserrat-medium",
    color: text.color,
  },
  input_text: {
    fontFamily: "montserrat-medium",
  },
  input_container: {
    borderBottomWidth: 2,
    borderBottomColor: bg_colors.gray_color,
    position: "relative"
  },
  eye_button: {
    position: "absolute",
    bottom: 15,
    right: 10
  },
});
