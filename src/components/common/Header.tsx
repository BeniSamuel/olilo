import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import dimensions from "../../theme/dimension.theme";

interface HeaderProp {
  handleNext: () => void;
}

const Header: React.FC<HeaderProp> = ({ handleNext }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableOpacity onPress={handleNext}>
        <Image source={require("../../../assets/common/back-icon.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: dimensions.height * 0.065,
  },
});
