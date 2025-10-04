import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";
import Point from "./Point";

const Review = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View style={styles.input_field}>
          <Image source={require("../../../assets/creation/book.png")} />
          <TextInput placeholder="Choose or enter book" style={styles.text_input}/>
        </View>
        <Image source={require("../../../assets/creation/search.png")} />
      </View>

      <View>
        <Point />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: dimensions.width * 0.035,
    paddingVertical: dimensions.height * 0.025
  },
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: dimensions.height * 0.01,
    paddingHorizontal: dimensions.width * 0.03,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: bg_colors.gray_color
  },
  input_field: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  text_input: {
    fontFamily: "montserrat-medium",
    color: text.color
  }
});
