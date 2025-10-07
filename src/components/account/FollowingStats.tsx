import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";

const FollowingStats = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.container}>
        <View style={styles.stats_container}>
          <Text style={styles.stats_value}>1,536</Text>
          <Text style={styles.stats_header}>followers</Text>
        </View>
        <View style={styles.stats_container}>
          <Text style={styles.stats_value}>195</Text>
          <Text style={styles.stats_header}>following</Text>
        </View>
        <View style={styles.third_container}>
          <Text style={styles.stats_value}>5</Text>
          <Text style={styles.stats_header}>streaks</Text>
        </View>
      </View>
    </View>
  );
};

export default FollowingStats;

const styles = StyleSheet.create({
  main_container: {
    paddingHorizontal: dimensions.width * 0.035,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: dimensions.width * 0.035,
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: bg_colors.gray_color,
    paddingVertical: dimensions.height * 0.02,
  },
  stats_container: {
    borderRightColor: bg_colors.gray_color,
    borderRightWidth: 1,
    paddingHorizontal: dimensions.width * 0.03,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stats_value: {
    fontFamily: "montserrat-semibold",
    color: text.headers,
  },
  stats_header: {
    fontFamily: "montserrat-medium",
    color: text.color,
  },
  third_container: {
    paddingHorizontal: dimensions.width * 0.035,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
