import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { text } from "../../theme/color.theme";

type StatisticCardProp = {
  icon: ImageSourcePropType;
  title: string;
  description: string;
};

const StatisticCard: React.FC<StatisticCardProp> = (prop) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={prop.icon} style={styles.image_icon} />
      </View>
      <View style={styles.content_container}>
        <Text style={styles.title_header}>{prop.title}</Text>
        <Text style={styles.subject}>{prop.description}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default StatisticCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image_icon: {
    height: 65,
    width: 65,
  },
  title_header: {
    fontFamily: "montserrat-semibold"
  },
  subject: {
    fontFamily: "montserrat-medium",
    color: text.color,
    lineHeight: 25
  },
  content_container: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  }
});
