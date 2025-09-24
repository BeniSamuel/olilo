import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors } from "../../theme/color.theme";
import { useBoardingStore } from "../../store/boarding_store/boarding.store";
import boarding_data from "../../data/boarding/boarding.data";
import { StatusBar } from "expo-status-bar";

type TopBarProp = {
    handleBack: () => void;
}

const TopBar: React.FC<TopBarProp> = ({handleBack}) => {
  const { section } = useBoardingStore();

  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableOpacity onPress={handleBack}>
        <Image
          source={require("../../../assets/common/back-icon.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.status_bar_container}>
        {boarding_data.map((_, idx) => (
          <View
            key={idx}
            style={{
              backgroundColor:
                section >= idx
                  ? bg_colors.button_bg_active
                  : bg_colors.button_bg_inactive,
              width: 55,
              height: 4,
              borderRadius: 12,
            }}
          />
        ))}
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

