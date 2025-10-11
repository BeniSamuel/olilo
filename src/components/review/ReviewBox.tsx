import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Speech from "expo-speech"; // 👈 import
import { KeyPoint } from "../../types/book.type";
import { bg_colors, text } from "../../theme/color.theme";
import dimensions from "../../theme/dimension.theme";

type ReviewBoxProp = {
  keyPoint: KeyPoint;
  bookName: string;
};

const ReviewBox: React.FC<ReviewBoxProp> = ({ keyPoint, bookName }) => {
  const [active, setActive] = useState(false);

  const handleSpeak = () => {
    setActive(true);
    Speech.speak(keyPoint.content, {
      language: "en",
      onDone: () => setActive(false), // stop animation when done
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.book_description}>
        <Text style={styles.book_title}>Book: {bookName}</Text>
        <Text style={styles.chapter_text}>Chapter {keyPoint.chapter}</Text>
      </View>

      <View style={styles.key_point_container}>
        <TouchableOpacity onPress={handleSpeak} activeOpacity={0.7}>
          <Image
            source={
              active
                ? require("../../../assets/review/voice_active.png")
                : require("../../../assets/review/voice_inactive.png")
            }
          />
        </TouchableOpacity>

        <Text style={styles.content_text}>{keyPoint.content}</Text>
      </View>
    </View>
  );
};

export default ReviewBox;

const styles = StyleSheet.create({
  book_title: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
    marginBottom: 4,
  },
  chapter_text: {
    fontFamily: "montserrat-bold",
  },
  content_text: {
    fontFamily: "montserrat-medium",
    color: text.color,
    flex: 1,
  },
  container: {
    flexDirection: "column",
    gap: 20,
  },
  book_description: {
    flexDirection: "column",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: bg_colors.gray_color,
    paddingVertical: dimensions.height * 0.02,
  },
  key_point_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
