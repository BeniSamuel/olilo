import { Platform, StyleSheet, View, FlatList, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import TopBar from "../../../components/boardings/TopBar";
import { bg_colors } from "../../../theme/color.theme";
import dimensions from "../../../theme/dimension.theme";
import boarding_data from "../../../data/boarding/boarding.data";
import InteractiveBoarding from "../../../components/boardings/InteractiveBoarding";

const { width, height } = Dimensions.get("window");

const Boarding = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < boarding_data.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({ item }) => {
    return <InteractiveBoarding {...item} style={styles.page} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={boarding_data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
    </View>
  );
};

export default Boarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg_colors.main_bg,
    paddingTop: Platform.OS === "android" ? dimensions.height * 0.035 : 0,
  },
  page: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
});
