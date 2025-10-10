import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import dimensions from "../../../theme/dimension.theme";
import { bg_colors, shadows, text } from "../../../theme/color.theme";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const AfterSignup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: dimensions.height * 0.1,
        }}
      >
        <View style={styles.greeting_container}>
          <Text style={styles.greeting_text}>Great!!</Text>
        </View>
        <View style={styles.description_container}>
          <Image
            source={require("../../../../assets/status/oli_jumping.png")}
            resizeMode="contain"
            style={styles.image_icon}
          />
          <View style={styles.text_container}>
            <Text style={styles.header}>Welcome 👋</Text>
            <Text style={styles.description_text}>
              Your profile has been created {"\n"}
              successfully. {"\n"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text style={styles.button_text}>CONTINUE TO HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AfterSignup;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.15,
    backgroundColor: bg_colors.main_bg,
    flex: 1,
    paddingHorizontal: dimensions.width * 0.045,
    paddingBottom: 12,
    display: "flex",
    flexDirection: "column",
    gap: dimensions.height * 0.01,
    justifyContent: "space-between",
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
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  image_icon: {
    // height: 300,
    // width: 300,
  },
  header: {
    color: bg_colors.button_bg_active,
    fontFamily: "montserrat-bold",
    fontSize: 20,
  },
});
