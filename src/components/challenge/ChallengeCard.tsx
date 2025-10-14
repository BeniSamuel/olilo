import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Challenges } from "../../types/challenge.type";
import { TouchableOpacity } from "react-native";
import useChallengeStore from "../../store/challenge_store/challenge.store";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";

type ChallengeCardProp = Challenges;

const ChallengeCard: React.FC<ChallengeCardProp> = (challenge) => {
  const { section, setSection } = useChallengeStore();
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>{challenge.questions[section].category}</Text>
          <Text>{challenge.title}</Text>
        </View>
        <View>
          <TouchableOpacity></TouchableOpacity>
          <Text>{challenge.questions[section].problem}</Text>
        </View>
      </View>
      <View>
        <View></View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Check Answer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChallengeCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: dimensions.width * 0.93,
    flex: 1,
    height: dimensions.height * 0.9
  },
  button: {
    backgroundColor: bg_colors.button_bg_active,
    paddingVertical: dimensions.height * 0.016,
    borderRadius: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  button_text: {
    color: text.button_text,
    fontFamily: "montserrat-semibold"
  }
});
