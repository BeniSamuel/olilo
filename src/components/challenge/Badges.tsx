import { StyleSheet, Text, View } from "react-native";
import React from "react";
import badges from "../../data/badge/badge.data";
import BadgeCard from "./BadgeCard";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";

const Badges = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={{ fontFamily: "montserrat-semibold", color: "#000" }}>
          This Year
        </Text>
        <Text style={{ fontFamily: "montserrat-medium", color: text.color }}>
          2 Badges
        </Text>
      </View>
      <View style={styles.container_data}>
        {badges.map((badge) => (
          <BadgeCard key={badge.id} title={badge.title} date={badge.date} />
        ))}
      </View>
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.width * 0.035,
    paddingVertical: dimensions.height * 0.03,
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  text_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container_data: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
