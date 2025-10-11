import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";

type RewardCardProp = {
  reward_description: string;
  color: string;
  reward_count: number;
  width: number;
};

const RewardCard: React.FC<RewardCardProp> = ({
  reward_description,
  color,
  reward_count,
  width,
}) => {
  return (
    <View
      style={[
        styles.container,
        { borderWidth: 2, borderColor: color, width: width },
      ]}
    >
      <View
        style={[
          styles.reward_description_container,
          { backgroundColor: color },
        ]}
      >
        <Text style={styles.reward_description_text}>{reward_description}</Text>
      </View>
      <View style={styles.reward_count_style}>
        <Image source={require("../../../assets/review/diamond.png")} />
        <Text style={styles.reward_count_value}>{reward_count}</Text>
      </View>
    </View>
  );
};

export default RewardCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
  },
  reward_count_style: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: dimensions.height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  reward_description_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: dimensions.height * 0.014,
    borderTopLeftRadius: 18.5,
    borderTopRightRadius: 18.5,
  },
  reward_description_text: {
    fontFamily: "montserrat-semibold",
    color: text.button_text,
  },
  reward_count_value: {
    fontFamily: "montserrat-medium"
  }
});
