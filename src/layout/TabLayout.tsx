import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import TopBar from "../components/home/TopBar";
import { bg_colors } from "../theme/color.theme";
import BottomBarTop from "../components/common/BottomBarTop";

type TabLayoutProp = {
  children: ReactNode;
  tab_name?: string;
};

const TabLayout: React.FC<TabLayoutProp> = ({ children, tab_name }) => {
  return (
    <View style={styles.container}>
      {tab_name !== "home" && <BottomBarTop bar_name={tab_name} />}
      {tab_name === "home" && <TopBar />}
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bg_colors.main_bg,
    flex: 1,
  },
});
