import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors } from "../../theme/color.theme";

type BadgesCardProp = {
  mission: string;
  progress: number;
  period: number;
};

const TargetCard: React.FC<BadgesCardProp> = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/challenge/diamond.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={{ fontFamily: "montserrat-semibold" }}>
          {props.mission}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "montserrat-semibold",
            color: bg_colors.button_bg_active,
          }}
        >
          {props.progress} / {props.period}
        </Text>
      </View>
    </View>
  );
};

export default TargetCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    paddingVertical: dimensions.height * 0.015,
    paddingHorizontal: dimensions.width * 0.03,
    borderRadius: 12,
    borderColor: "#D9D9D9",
  },
  image: {
    width: 40,
    height: 40,
  },
});
