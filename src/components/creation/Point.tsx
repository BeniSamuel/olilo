import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors } from "../../theme/color.theme";

const Point = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Lesson (s)</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../../assets/creation/add.png")} />
          <Text style={{ fontFamily: "montserrat-medium" }}>
            Add another lesson
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Point;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.025,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  header: {
    fontFamily: "montserrat-semibold",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
    paddingVertical: dimensions.height * 0.017,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: bg_colors.gray_color,
  },
});
