import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { bg_colors, text } from "../../theme/color.theme";
import { StatusBar } from "expo-status-bar";
import dimensions from "../../theme/dimension.theme";
import TopReview from "./TopReview";
import ReviewBox from "./ReviewBox";
import { KeyPoint } from "../../types/book.type";

type ReviewContainerProps = {
  keyPoint: KeyPoint;
  bookName: string;
  handleNext: () => void;
  handleBack: () => void;
};

const ReviewContainer: React.FC<ReviewContainerProps> = ({
  keyPoint,
  bookName,
  handleNext,
  handleBack
}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View>
        <TopReview handleBack={handleBack}/>

        <ReviewBox keyPoint={keyPoint} bookName={bookName} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.button_text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg_colors.main_bg,
    justifyContent: "space-between",
    width: dimensions.width * 0.93,
  },
  book_title: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
    marginBottom: 4,
  },
  chapter_text: {
    fontFamily: "montserrat-medium",
    color: text.color,
  },
  content_text: {
    fontFamily: "montserrat-regular",
    marginTop: 10,
  },
  button: {
    backgroundColor: bg_colors.button_bg_active,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: dimensions.height * 0.015,
    borderRadius: 25,
  },
  button_text: {
    color: text.button_text,
    fontFamily: "montserrat-semibold",
  },
});
