import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import TopBar from "./TopBar";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";

type Props = {
  question: string;
  options: string[];
};

const InteractiveBoarding = ({ question, options }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.question_container}>
        <Image
          source={require("../../../assets/boarding/oli_icon.png")}
          style={{ width: 112, height: 112 }}
        />
        <View style={styles.question_text_container}>
          <Text style={styles.question}>{question}</Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        {options.map((opt, idx) => {
          const isSelected = selected === opt; // ✅ moved inside callback
          return (
            <TouchableOpacity
              key={idx}
              style={[styles.optionBtn, isSelected && styles.optionBtnSelected]}
              onPress={() => setSelected(opt)}
            >
              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.optionTextSelected,
                ]}
              >
                {opt}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default InteractiveBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: dimensions.width * 0.035,
    width: dimensions.width,
    display: "flex",
    flexDirection: "column",
    gap: 20
    
  },
  question: {
    marginBottom: 20,
    textAlign: "justify",
    fontFamily: "montserrat-medium",
    lineHeight: 25,
    color: text.color
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionBtn: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "rgba(121, 117, 113, 0.09)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D9D9D9",
  },
  optionBtnSelected: {
    backgroundColor: "rgba(248, 140, 45, 0.07)",
    borderWidth: 2,
    borderColor: "#E3710D",
  },
  optionText: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "montserrat-semibold",
    color: "#333",
  },
  optionTextSelected: {
    color: "#000", // white text when selected
    fontFamily: "montserrat-semibold",
  },
  question_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question_text_container: {
    backgroundColor: bg_colors.button_bg_inactive,
    paddingHorizontal: dimensions.width * 0.055,
    paddingVertical: dimensions.height * 0.025,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#D9D9D9"
  }
});
