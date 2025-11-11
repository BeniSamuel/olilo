import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { bg_colors, text } from "../../../theme/color.theme";
import dimensions from "../../../theme/dimension.theme";
import RewardCard from "../../../components/common/RewardCard";
import { useNavigation } from "@react-navigation/native";

const AfterReview = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.review_icon_container}>
        <View>
          <Text style={styles.review_text}>Review Completed!</Text>
        </View>
        <View>
          <Image
            source={require("../../../../assets/status/oli_jumping.png")}
          />
        </View>
      </View>

      <View style={styles.reward_container}>
        <RewardCard
          reward_description={"Diamonds"}
          color={bg_colors.button_bg_active}
          reward_count={0}
          width={dimensions.width * 0.93}
        />
        <View style={styles.reward_container_2}>
          <RewardCard
            reward_description={"Total XP"}
            color={bg_colors.pink_color}
            reward_count={0}
            width={dimensions.width * 0.43}
          />
          <RewardCard
            reward_description={"Time"}
            color={bg_colors.green_color}
            reward_count={0}
            width={dimensions.width * 0.43}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text style={styles.button_text}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AfterReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bg_colors.main_bg,
    paddingVertical: dimensions.height * 0.055,
    paddingHorizontal: dimensions.width * 0.035,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  reward_container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  reward_container_2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: bg_colors.button_bg_active,
    paddingVertical: dimensions.height * 0.016,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  button_text: {
    color: text.button_text,
    fontFamily: "montserrat-medium",
  },
  review_icon_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: dimensions.height * 0.045,
  },
  review_text: {
    fontFamily: "montserrat-bold",
    color: bg_colors.button_bg_active,
    fontSize: 18,
  },
});
