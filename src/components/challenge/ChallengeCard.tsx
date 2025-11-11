import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Challenges } from "../../types/challenge.type";
import { TouchableOpacity } from "react-native";
import useChallengeStore from "../../store/challenge_store/challenge.store";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";

type ChallengeCardProp = Challenges;

const ChallengeCard: React.FC<ChallengeCardProp> = (challenge) => {
  const { section, setSection } = useChallengeStore();
  const [active, setActive] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={styles.content_styles}>
        <View style={styles.heading_container}>
          <Text style={styles.category_text_style}>{challenge.questions[section].category}</Text>
          <Text style={styles.title_text_style}>{challenge.title}</Text>
        </View>
        <View style={styles.question_container}>
          <TouchableOpacity
            onPress={() => {
              setActive(!active);
            }}
          >
            <Image
              source={
                active
                  ? require("../../../assets/review/voice_active.png")
                  : require("../../../assets/review/voice_inactive.png")
              }
              style={styles.image_size}
            />
          </TouchableOpacity>
          <Text style={styles.question_text}>
            {challenge.questions[section].problem}
          </Text>
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
    height: dimensions.height * 0.9,
  },
  button: {
    backgroundColor: bg_colors.button_bg_active,
    paddingVertical: dimensions.height * 0.016,
    borderRadius: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    color: text.button_text,
    fontFamily: "montserrat-semibold",
  },
  content_styles: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  question_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  question_text: {
    fontFamily: "montserrat-medium",
    lineHeight: 25
  },
  image_size: {
    width: 28,
    height: 28,
  },
  category_text_style: {
    fontFamily: "montserrat-semibold"
  },
  title_text_style: {
    fontFamily:"montserrat-semibold"
  },
  heading_container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    borderBottomWidth: 2,
    borderBottomColor: bg_colors.button_bg_inactive,
    paddingBottom: dimensions.height * 0.025
  }
});
