import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import TopBar from "../components/home/TopBar";
import { bg_colors } from "../theme/color.theme";

type TabLayoutProp = {
  children: ReactNode;
};

const TabLayout: React.FC<TabLayoutProp> = ({ children }) => {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
    container: {
        backgroundColor: bg_colors.main_bg,
        flex: 1
    }
});
