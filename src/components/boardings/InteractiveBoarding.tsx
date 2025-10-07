import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import TopBar from "./TopBar";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";
import ContinueButton from "./ContinueButton";
import Objectives from "./Objectives";

type Props = {
  id: number;
  question: string;
  options: string[];
  handleNext: () => void;
  handleBack: () => void;
};

const InteractiveBoarding = ({
  question,
  options,
  handleNext,
  handleBack,
  id,
}: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <TopBar handleBack={handleBack} />
      <View style={styles.question_container}>
        <Image
          source={require("../../../assets/boarding/oli_icon.png")}
          style={{ width: 112, height: 112 }}
        />
        <View style={styles.question_text_container}>
          <Text style={styles.question}>{question}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={[styles.optionsContainer, id === 3 && styles.slide_three]}>
        {options.map((opt, idx) => {
          const isSelected = selected === opt;
          if (id === 3) {
            return (
              <Objectives
                key={idx}
                icon={opt.icon}
                topic={opt.topic}
                subject={opt.subject}
              />
            );
          } else if (id === 4) {
            return (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.optionBtn,
                  isSelected && styles.optionBtnSelected,
                  {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: dimensions.width * 0.045,
                    paddingVertical: dimensions.height * 0.025
                  }
                ]}
                onPress={() => setSelected(opt)}
              >
                <Text
                  style={[
                    styles.optionText,
                    isSelected && styles.optionTextSelected,
                  ]}
                >
                  {opt.time}
                </Text>
                <Text
                  style={[
                    styles.optionText,
                    isSelected && styles.optionTextSelected,
                    { color: text.color, fontFamily: "montserrat-medium" }
                  ]}
                >
                  {opt.status}
                </Text>
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              key={idx}
              style={[styles.optionBtn, isSelected && styles.optionBtnSelected]}
              onPress={() => setSelected(opt)}
            >
              <Image source={opt.icon} />
              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.optionTextSelected,
                ]}
              >
                {opt.country}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ContinueButton handleNext={handleNext} text={ id === 4 ? "Get Started" : "Continue" }/>
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
    gap: 20,
    justifyContent: "space-between",
  },
  question: {
    marginBottom: 20,
    textAlign: "justify",
    fontFamily: "montserrat-medium",
    lineHeight: 25,
    color: text.color,
  },
  slide_three: {
    backgroundColor: bg_colors.button_bg_inactive,
    borderRadius: 20,
    paddingVertical: dimensions.height * 0.02,
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  optionBtnSelected: {
    backgroundColor: "rgba(248, 140, 45, 0.07)",
    borderWidth: 2,
    borderColor: "#E3710D",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  optionText: {
    // fontSize: 15,
    textAlign: "justify",
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
    borderColor: "#D9D9D9",
  },
});
