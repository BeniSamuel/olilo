import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { bg_colors, text } from "../../theme/color.theme";
import { useBoardingStore } from "../../store/boarding_store/boarding.store";

type ContinueButtonProps = {
  handleNext: () => void;
  text: string;
};

const ContinueButton: React.FC<ContinueButtonProps> = ({
  handleNext,
  text,
}) => {
  const { section } = useBoardingStore();
  return (
    <TouchableOpacity style={styles.container} onPress={handleNext}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bg_colors.button_bg_active,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "montserrat-semibold",
    color: text.button_text,
  },
});
