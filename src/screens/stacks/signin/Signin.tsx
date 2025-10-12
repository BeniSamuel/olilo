import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../components/common/Header";
import { useNavigation } from "@react-navigation/native";
import { bg_colors, text } from "../../../theme/color.theme";
import dimensions from "../../../theme/dimension.theme";
import Button from "../../../components/common/Button";

const Signin = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const handleSubmitForm = () => {
    navigation.navigate("Tabs");
  };

  return (
    <View style={styles.container}>
      <View style={styles.greetings_container}>
        <Header handleNext={() => navigation.goBack()} />
      </View>

      <View style={styles.form}>
        <View style={{ paddingVertical: dimensions.height * 0.04 }}>
          <Text style={styles.greetings}>Hello there 👋</Text>
        </View>
        <View style={styles.input_field}>
          <Text style={styles.input_label}>Email</Text>
          <TextInput placeholder="Email" style={styles.fields} />
        </View>
        <View style={styles.input_field}>
          <Text style={styles.input_label}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.fields}
            secureTextEntry={visible}
          />
          <TouchableOpacity style={styles.eye_button} onPress={() => {setVisible(!visible)}}>
            <Image source={require("../../../../assets/signin/eye_icon.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: dimensions.height * 0.01 }}>
          <Text style={styles.remember_me}>Remember me</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgot_password}>Forgot password?</Text>
      </TouchableOpacity>

      <View>
        <Button button_text={"SIGN IN"} handlePress={handleSubmitForm} />
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bg_colors.main_bg,
    flex: 1,
    paddingHorizontal: dimensions.width * 0.035,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: dimensions.height * 0.05,
  },
  greetings_container: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  greetings: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  input_field: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    position: "relative"
  },
  input_label: {
    color: text.color,
    fontFamily: "montserrat-medium",
  },
  fields: {
    borderBottomWidth: 2,
    borderBottomColor: bg_colors.gray_color,
    fontFamily: "montserrat-semibold",
    color: "black",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  remember_me: {
    fontFamily: "montserrat-semibold",
    color: "black",
  },
  forgot_password: {
    fontFamily: "montserrat-semibold",
    color: bg_colors.button_bg_active,
    textAlign: "center",
  },
  eye_button: {
    position: "absolute",
    bottom: 15,
    right: 10,
  }
});
