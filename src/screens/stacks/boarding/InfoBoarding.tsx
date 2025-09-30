import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import dimensions from "../../../theme/dimension.theme";
import { bg_colors, text } from "../../../theme/color.theme";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const InfoBoarding = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.greeting_container}>
        <Text style={styles.greeting_text}>Hi there , I'm Oli!</Text>
      </View>
      <View style={styles.description_container}>
        <Image source={require("../../../../assets/boarding/oli_icon.png")} />
        <View style={styles.text_container}>
          <Text style={styles.title}>Olilo</Text>
          <Text style={styles.description_text}>
            Keep your book insights alive {"\n"}
            review them anytime, anywhere with {"\n"}
            Olilo's simple and engaging features. Enjoy
          </Text>
        </View>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Boarding")}>
          <Text style={styles.button_text}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoBoarding;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.15,
    backgroundColor: bg_colors.main_bg,
    flex: 1,
    paddingHorizontal: dimensions.width * 0.045,
    paddingBottom: 12,
    display: "flex",
    gap: dimensions.height * 0.1,
    justifyContent: "space-between"
  },
  greeting_container: {
    backgroundColor: "white",
    borderColor: bg_colors.button_bg_inactive,
    borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 12,
  },
  greeting_text: {
    color: text.color,
    fontFamily: "montserrat-semibold",
  },
  title: {
    color: bg_colors.button_bg_active,
    fontFamily: "montserrat-bold",
    fontSize: 20,
  },
  description_text: {
    color: text.color,
    fontFamily: "montserrat-medium",
    lineHeight: 25,
    textAlign: "center",
  },
  button: {
    backgroundColor: bg_colors.button_bg_active,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 25,
  },
  button_text: {
    color: text.button_text,
    fontFamily: "montserrat-semibold",
  },
  description_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  text_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  button_container: {
    paddingVertical: 12,
  }
});
