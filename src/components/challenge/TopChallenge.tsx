import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import reviews from "../../data/review/review.data";
import { bg_colors } from "../../theme/color.theme";
import dimensions from "../../theme/dimension.theme";
import useReviewStore from "../../store/review_store/review.store";
import useChallengeStore from "../../store/challenge_store/challenge.store";

type TopReviewProp = {
  handleBack: () => void;
};

const TopChallenge: React.FC<TopReviewProp> = ({ handleBack }) => {
  const { section } = useChallengeStore();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Image source={require("../../../assets/common/back-icon.png")} />
      </TouchableOpacity>

      <View style={styles.status_bar_container}>
        {reviews.map((review, idx) => (
          <View
            key={idx}
            style={{
              backgroundColor:
                section >= idx
                  ? bg_colors.button_bg_active
                  : bg_colors.button_bg_inactive,
              width: 55,
              height: 4,
              borderRadius: 12,
            }}
          />
        ))}
      </View>

      <View style={styles.diamond_container}>
        <Image source={require("../../../assets/review/diamond.png")} />
        <Text style={styles.diamond_collected}>100</Text>
      </View>
    </View>
  );
};

export default TopChallenge;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: dimensions.height * 0.025,
  },
  status_bar_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  diamond_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  diamond_collected: {
    fontFamily: "montserrat-medium",
  },
});
