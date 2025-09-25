import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { StatusBar } from "expo-status-bar";
import { bg_colors, text } from "../../theme/color.theme";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.option_container}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../../assets/home/usa_flag.png")} />
          <Text style={styles.text}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../../assets/home/streak_icon.png")} />
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: dimensions.height * 0.065,
    backgroundColor: bg_colors.button_bg_active,
  },
  option_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: dimensions.width * 0.035,
    paddingVertical: dimensions.height * 0.025,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  text: {
    fontFamily: "montserrat-medium",
    color: text.button_text
  }
});
