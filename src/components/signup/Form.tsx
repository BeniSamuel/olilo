import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";
import useSignupStoreType from "../../store/signup_store/signup.store";
import NameInput from "./NameInput";
import DateOfBirth from "./DateOfBirth";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

type FormPropType = {
  question: string;
  handleNext: () => void;
};

const Form: React.FC<FormPropType> = (props) => {
  const { section } = useSignupStoreType();
  return (
    <View style={styles.container}>
      <View style={styles.form_container}>
        <View>
          <Text style={styles.question_text}>{props.question}</Text>
        </View>
        <View>
          {section === 0 && <NameInput />}
          {section === 1 && <DateOfBirth />}
          {section === 2 && <EmailInput />}
          {section === 3 && <PasswordInput />}
        </View>
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.button_continue}
          onPress={props.handleNext}
        >
          <Text style={styles.button_text}>
            {section === 3 ? "Register" : "Continue"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: dimensions.width * 0.035,
  },
  question_text: {
    fontFamily: "montserrat-bold",
    lineHeight: 25,
    fontSize: 16,
  },
  button_continue: {
    backgroundColor: bg_colors.button_bg_active,
    paddingVertical: dimensions.height * 0.015,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  button_text: {
    fontFamily: "montserrat-semibold",
    color: text.button_text,
  },
  button_container: {
    paddingVertical: dimensions.height * 0.015,
  },
  form_container: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
});
