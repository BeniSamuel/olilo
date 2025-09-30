import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import TabLayout from "../../../layout/TabLayout";
import dimensions from "../../../theme/dimension.theme";
import { bg_colors, text } from "../../../theme/color.theme";
import ProgressTracker from "../../../components/home/ProgressTracker";
import { TouchableOpacity } from "react-native";
import TodayChallenge from "../../../components/home/TodayChallenge";
import Journey from "../../../components/home/Journey";

const user = {
  name: "Beni",
};

const Home = () => {
  return (
    <TabLayout>
      <View style={styles.textContainer}>
        <Text style={styles.user_container}>Hi {user.name} 👋</Text>
        <View style={styles.streak_details}>
          <Image source={require("../../../../assets/home/streak_count.png")} />
          <Text style={styles.streak_count}>5 - day streak</Text>
        </View>
      </View>

      <View style={styles.progress_tracker}>
        <ProgressTracker />
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../../../assets/home/button_add_icon.png")} resizeMode="contain" style={styles.button_image}/>
          <Text style={styles.button_text}>Add a Review</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progress_tracker}>
        <TodayChallenge />
      </View>

      <View style={styles.progress_tracker}>
        <Journey />
      </View>
    </TabLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: dimensions.width * 0.03,
    paddingVertical: dimensions.height * 0.035,
    alignItems: "center",
  },
  user_container: {
    fontFamily: "montserrat-bold",
  },
  streak_details: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  streak_count: {
    fontFamily: "montserrat-medium",
    color: text.color,
  },
  progress_tracker: {
    paddingHorizontal: dimensions.width * 0.03
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    backgroundColor: bg_colors.button_bg_active,
    paddingVertical: dimensions.height * 0.012,
    borderRadius: 20,
    alignItems: "center"
  },
  button_container: {
    paddingVertical: dimensions.height * 0.035,
    paddingHorizontal: dimensions.width * 0.03
  },
  button_image: {
    width: 18,
    height: 18
  },
  button_text: {
    fontFamily: "montserrat-medium",
    color: text.button_text
  }
});
