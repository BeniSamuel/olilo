import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { bg_colors, text } from "../../../theme/color.theme";
import dimensions from "../../../theme/dimension.theme";
import BackButton from "../../../components/common/BackButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.input_holders}>
        <BackButton handleBack={() => navigation.goBack() }/>
        <View style={styles.description_container}>
          <Text style={styles.header}>Forgot Password</Text>
          <Text style={styles.description_text}>
            Enter your email address to get an OTP code{"\n"}to reset your
            password.
          </Text>
        </View>
        <View style={styles.email_container}>
          <Text style={styles.email_label}>Email</Text>
          <TextInput placeholder="Enter your email" style={styles.email_input}/>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Otp")}>
          <Text style={styles.button_text}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bg_colors.main_bg,
    flex: 1,
    paddingVertical: dimensions.height * 0.035,
    paddingHorizontal: dimensions.width * 0.035,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: bg_colors.button_bg_active,
    paddingVertical: dimensions.height * 0.02,
    borderRadius: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button_text: {
    fontFamily: "montserrat-semibold",
    color: text.button_text
  },
  description_container: {
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  header: {
    fontFamily: "montserrat-bold"
  },
  description_text: {
    fontFamily: "montserrat-medium",
    color: text.color,
    lineHeight: 25
  },
  input_holders: {
    display: "flex",
    flexDirection: "column",
    gap: 25
  },
  email_container: {
    display: "flex",
    flexDirection: "column",
    gap: 9,
    borderBottomColor: bg_colors.gray_color,
    borderBottomWidth: 1
  },
  email_label: {
    fontFamily: "montserrat-medium",
    color: text.color
  },
  email_input: {
    fontFamily: "montserrat-semibold",
}});
