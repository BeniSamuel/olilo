import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import targets from "../../data/target/target.data";
import TargetCard from "./TargetCard";

const Target = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.introduction}>Weekly Missions 🎯</Text>
      </View>
      <View style={styles.container_data}>
        {targets.map((target) => (
          <TargetCard
            key={target.id}
            mission={target.mission}
            progress={target.progress}
            period={target.period}
          />
        ))}
      </View>
    </View>
  );
};

export default Target;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.width * 0.035,
  },
  introduction: {
    fontFamily: "montserrat-semibold",
  },
  container_data: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    paddingVertical: dimensions.height * 0.035,
    // backgroundColor: "green"
  }
});
