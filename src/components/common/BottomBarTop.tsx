import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import dimensions from "../../theme/dimension.theme";

type BottomBarTopProp = {
  bar_name?: string;
};

const BottomBarTop: React.FC<BottomBarTopProp> = ({ bar_name }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.tab_info}>
        <Image
          source={require("../../../assets/common/oli.png")}
          resizeMode="contain"
        />
        <Text style={styles.bar_name}>{bar_name}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default BottomBarTop;

const styles = StyleSheet.create({
  container: {
    paddingTop: dimensions.height * 0.045,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab_info: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: dimensions.height * 0.01,
    paddingHorizontal: dimensions.width * 0.03,
  },
  bar_name: {
    fontFamily: "montserrat-semibold",
    fontSize: 15,
  },
});
