import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";

type AnswerCardProp = {
  id: number;
  answer: string;
  result: string;
};

const AnswerCard: React.FC<AnswerCardProp> = ({ answer }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setClicked(!clicked)}
      style={[
        styles.container,
        {
          backgroundColor: clicked
            ? bg_colors.button_bg_active
            : bg_colors.main_bg, // light default
          borderColor: bg_colors.button_bg_active,
          borderWidth: 1.5,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: clicked ? text.button_text : bg_colors.button_bg_active },
        ]}
      >
        {answer}
      </Text>
    </TouchableOpacity>
  );
};

export default AnswerCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.025,
    paddingHorizontal: dimensions.width * 0.05,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },
  text: {
    fontFamily: "montserrat-medium",
    fontSize: 15,
  },
});
