import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabLayout from "../../../layout/TabLayout";
import Option from "../../../components/challenge/Option";
import useChallengeStore from "../../../store/challenge_store/challenge.store";
import Target from "../../../components/challenge/Target";
import Badges from "../../../components/challenge/Badges";

const Challenge = () => {
  const { focused } = useChallengeStore();
  return (
    <TabLayout tab_name="Challenge">
      <Option />

      <View>{focused === "target" ? <Target /> : <Badges />}</View>
    </TabLayout>
  );
};

export default Challenge;

const styles = StyleSheet.create({});
