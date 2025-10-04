import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";
import useOptionStore from "../../store/creation_store/option.store";

const Option = () => {
  const {focused, setFocused} = useOptionStore();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setFocused("review");
        }}
        style={[
          styles.button,
          {
            backgroundColor:
              focused === "review"
                ? bg_colors.button_bg_active
                : bg_colors.main_bg,
            borderColor: focused !== "review" ? bg_colors.button_bg_active : "",
            borderWidth: focused !== "review" ? 2 : 0,
          },
        ]}
      >
        <Text
          style={[
            styles.text_button,
            {
              color:
                focused === "review"
                  ? text.button_text
                  : bg_colors.button_bg_active,
            },
          ]}
        >
          Review
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setFocused("challenge")}
        style={[
          styles.button,
          {
            borderColor: focused !== "challenge" ? bg_colors.button_bg_active : "",
            borderWidth: focused !== "challenge" ? 2 : 0,
            backgroundColor:
              focused === "challenge"
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
                focused === "challenge"
                  ? text.button_text
                  : bg_colors.button_bg_active,
            },
          ]}
        >
          Challenge
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
