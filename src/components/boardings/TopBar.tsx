import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors } from "../../theme/color.theme";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../../../assets/common/back-icon.png")} resizeMode="contain"/>
      </TouchableOpacity>
      <View style={styles.status_bar_container}>
        <View
          style={{
            backgroundColor: bg_colors.button_bg_inactive,
            width: 55,
            height: 4,
            borderRadius: 12,
          }}
        />
        <View
          style={{
            backgroundColor: bg_colors.button_bg_inactive,
            width: 55,
            height: 4,
            borderRadius: 12,
          }}
        />
        <View
          style={{
            backgroundColor: bg_colors.button_bg_inactive,
            width: 55,
            height: 4,
            borderRadius: 12,
          }}
        />
        <View
          style={{
            backgroundColor: bg_colors.button_bg_inactive,
            width: 55,
            height: 4,
            borderRadius: 12,
          }}
        />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: dimensions.width * 0.025,
    paddingVertical: dimensions.height * 0.025,
  },
  status_bar_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
