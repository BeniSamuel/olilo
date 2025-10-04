import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import { bg_colors, text } from "../../theme/color.theme";

type BadgesCardProp = {
  title: string;
  date: Date;
};

const BadgeCard: React.FC<BadgesCardProp> = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/challenge/coin.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.description}>
        <Text style={{ fontFamily: "montserrat-semibold" }}>{props.title}</Text>
        <Text style={{ fontFamily: "montserrat-medium", color: text.color }}>
          {props.date.toLocaleString("default", { month: "long" })}
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={require("../../../assets/challenge/direct.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BadgeCard;

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
    width: 50,
    height: 50,
  },
  description: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
});
