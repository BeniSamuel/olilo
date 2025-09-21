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

type ObjectivesProps = {
  icon: ImageSourcePropType;
  topic: string;
  subject: string;
};

const Objectives: React.FC<ObjectivesProps> = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={props.icon} />
      </View>
      <View style={styles.inform}>
        <Text style={styles.topic_style}>{props.topic}</Text>
        <Text style={styles.subject_style}>{props.subject}</Text>
      </View>
    </View>
  );
};

export default Objectives;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: dimensions.height * 0.04,
    paddingHorizontal: dimensions.width * 0.05,
    gap: 25,
  },
  inform: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  topic_style: {
    fontFamily: "montserrat-semibold",
    textAlign: "justify",
    lineHeight: 25
  },
  subject_style: {
    fontFamily: "montserrat-medium",
    color: text.color,
    lineHeight: 25,
    textAlign: "justify"
  }
});
