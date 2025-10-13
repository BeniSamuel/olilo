import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";

type BackButtonProp = {
  handleBack: () => void;
};

const BackButton: React.FC<BackButtonProp> = ({ handleBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Image source={require("../../../assets/common/back-icon.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.035,
  },
});
