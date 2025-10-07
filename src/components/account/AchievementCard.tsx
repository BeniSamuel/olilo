import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { bg_colors, text } from "../../theme/color.theme";
import dimensions from "../../theme/dimension.theme";

type AchievementCardProp = {
  count: number;
  category: string;
  icon: ImageSourcePropType;
};

const AchievementCard: React.FC<AchievementCardProp> = (prop) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={prop.icon}
          style={styles.image_icon}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.count}>{prop.count}</Text>
        <Text style={styles.category}>{prop.category}</Text>
      </View>
    </View>
  );
};

export default AchievementCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 9,
    borderColor: bg_colors.gray_color,
    borderWidth: 2,
    paddingHorizontal: dimensions.width * 0.035,
    paddingVertical: dimensions.height * 0.015,
    borderRadius: 12,
    alignItems: "center",
  },
  image_icon: {
    width: 17,
    height: 17,
  },
  count: {
    fontFamily: "montserrat-semibold",
  },
  category: {
    fontFamily: "montserrat-medium",
    color: text.color,
  },
});
