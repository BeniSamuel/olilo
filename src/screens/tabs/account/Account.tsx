import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import TabLayout from "../../../layout/TabLayout";
import UserProfile from "../../../components/account/UserProfile";
import FollowingStats from "../../../components/account/FollowingStats";
import { bg_colors, text } from "../../../theme/color.theme";
import dimensions from "../../../theme/dimension.theme";
import YourStatistics from "../../../components/account/YourStatistics";
import YourAchievements from "../../../components/account/YourAchievements";

const Account = () => {
  return (
    <TabLayout tab_name="Account">
      <View>
        <UserProfile />
        <FollowingStats />
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity style={styles.edit_button}>
          <Text style={styles.button_text}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statistic_container}>
        <View>
          <YourStatistics />
        </View>

        <View style={styles.achievement_container}>
          <YourAchievements />
        </View>
      </View>
    </TabLayout>
  );
};

export default Account;

const styles = StyleSheet.create({
  button_container: {
    paddingHorizontal: dimensions.width * 0.035,
    paddingVertical: dimensions.height * 0.025,
  },
  edit_button: {
    backgroundColor: bg_colors.button_bg_active,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: dimensions.height * 0.015,
    borderRadius: 20,
  },
  button_text: {
    color: text.button_text,
    fontFamily: "montserrat-medium",
  },
  achievement_container: {
    paddingHorizontal: dimensions.width * 0.035,
  },
  statistic_container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingVertical: dimensions.height * 0.01
  }
});
