import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { bg_colors, text } from "../../theme/color.theme";
import dimensions from "../../theme/dimension.theme";

const ProgressTracker = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/home/book_icon.png")}
          resizeMode="contain"
          width={15}
          height={15}
        />
      </View>
      <View>
        <Text style={styles.text}>10 / 50 review completed this month</Text>
      </View>
      <View>
        <View
          style={[
            {
              backgroundColor: bg_colors.button_bg_active,
              width: dimensions.width,
            },
          ]}
        >
          <View />
        </View>
      </View>
    </View>
  );
};

export default ProgressTracker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: text.button_text,
    paddingVertical: dimensions.height * 0.035,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
    borderRadius: 12,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android shadow
    elevation: 2,
  },

  text: {
    fontFamily: "montserrat-medium",
    color: text.color,
  },
});
