import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import signup_data from "../../data/signup/signup.data";
import useSignupStoreType from "../../store/signup_store/signup.store";
import { bg_colors } from "../../theme/color.theme";

interface TopBarProp {
  handleBack: () => void;
}

const TopBar: React.FC<TopBarProp> = ({ handleBack }) => {
  const { section } = useSignupStoreType();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleBack}>
          <Image source={require("../../../assets/common/back-icon.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.status_bar_container}>
        {signup_data.map((data, idx) => (
          <View
            key={data.id}
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
    paddingHorizontal: dimensions.width * 0.035,
    paddingVertical: dimensions.height * 0.055,
  },
  status_bar_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
