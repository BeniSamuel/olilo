import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { bg_colors, text } from "../../theme/color.theme";
import dimensions from "../../theme/dimension.theme";

const TodayChallenge = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.header}>Today's Challenge</Text>
        <Text style={styles.subject}>Review 2 notes to earn 20 points</Text>
      </View>
      <View>
        <Image source={require("../../../assets/home/upcoming.png")} />
      </View>
    </View>
  );
};

export default TodayChallenge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bg_colors.reduced_orange,
    paddingVertical: dimensions.height * 0.035,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: dimensions.width * 0.04,
  },
  text_container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  header: {
    fontFamily: "montserrat-bold",
  },
  subject: {
    fontFamily: "montserrat-medium",
    color: text.color,
  },
});
