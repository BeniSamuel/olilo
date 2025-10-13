import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";
import useChallengeStore from "../../store/challenge_store/challenge.store";

const Option = () => {
  const { focused, setFocused } = useChallengeStore();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setFocused("target");
        }}
        style={[
          styles.button,
          {
            backgroundColor:
              focused === "target"
                ? bg_colors.button_bg_active
                : bg_colors.main_bg,
            borderColor: focused !== "target" ? bg_colors.button_bg_active : "",
            borderWidth: focused !== "target" ? 2 : 0,
          },
        ]}
      >
        <Text
          style={[
            styles.text_button,
            {
              color:
                focused === "target"
                  ? text.button_text
                  : bg_colors.button_bg_active,
            },
          ]}
        >
          Target
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setFocused("badges")}
        style={[
          styles.button,
          {
            borderColor: focused !== "badges" ? bg_colors.button_bg_active : "",
            borderWidth: focused !== "badges" ? 2 : 0,
            backgroundColor:
              focused === "badges"
                ? bg_colors.button_bg_active
                : bg_colors.main_bg,
          },
        ]}
      >
        <Text
          style={[
            styles.text_button,
            {
              color:
                focused === "badges"
                  ? text.button_text
                  : bg_colors.button_bg_active,
            },
          ]}
        >
          Badges
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: dimensions.width * 0.035,
    justifyContent: "space-between",
    paddingVertical: dimensions.height * 0.025,
  },
  button: {
    paddingVertical: dimensions.height * 0.015,
    paddingHorizontal: dimensions.width * 0.15,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text_button: {
    fontFamily: "montserrat-medium",
  },
});
