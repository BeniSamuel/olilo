import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { bg_colors, text } from "../../theme/color.theme";

const NameInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full name</Text>
      <View style={styles.input_container}>
        <TextInput placeholder="Enter full name" style={styles.input_text} placeholderTextColor={"#000"}/>
      </View>
    </View>
  );
};

export default NameInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  label: {
    fontFamily: "montserrat-medium",
    color: text.color
  },
  input_text: {
    fontFamily: "montserrat-medium"
  },
  input_container: {
    borderBottomWidth: 2,
    borderBottomColor: bg_colors.gray_color
  }
});
