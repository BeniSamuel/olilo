import { StyleSheet, Text, View } from "react-native";
import React from "react";
import statistics from "../../data/statistics/statistics.data";
import StatisticCard from "./StatisticCard";
import dimensions from "../../theme/dimension.theme";
import { bg_colors } from "../../theme/color.theme";

const YourAchievements = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title_header}>2 Achievements</Text>
      </View>

      <View style={styles.achievements_container}>
        {statistics.map((statistic) => (
          <StatisticCard
            key={statistic.id}
            icon={statistic.icon}
            title={statistic.title}
            description={statistic.description}
          />
        ))}
      </View>
    </View>
  );
};

export default YourAchievements;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.width * 0.035,
    paddingVertical: dimensions.height * 0.02,
    display: "flex",
    flexDirection: "column",
    gap: 25,
    borderWidth: 2,
    borderColor: bg_colors.gray_color,
    borderRadius: 12
  },
  title_header: {
    fontFamily: "montserrat-semibold"
  },
  achievements_container: {
    display: "flex",
    flexDirection: "column",
    gap: 25
  }
});
