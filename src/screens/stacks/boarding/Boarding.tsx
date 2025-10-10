import { Platform, StyleSheet, View, FlatList, Dimensions } from "react-native";
import React, { useRef } from "react";
import { bg_colors } from "../../../theme/color.theme";
import dimensions from "../../../theme/dimension.theme";
import boarding_data from "../../../data/boarding/boarding.data";
import InteractiveBoarding from "../../../components/boardings/InteractiveBoarding";
import { useBoardingStore } from "../../../store/boarding_store/boarding.store";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Boarding = () => {
  const flatListRef = useRef<FlatList>(null);
  let { section, setSection, logout } = useBoardingStore();
  const navigation = useNavigation();

  const handleNext = () => {
    if (section < boarding_data.length - 1 && section !== 4) {
      flatListRef.current?.scrollToIndex({ index: section + 1, animated: true });
      setSection(section + 1);
    } else {
      navigation.navigate("Status")
      logout();
    }
  };

  const handleBack = () => {
  if (section > 0) {
    flatListRef.current?.scrollToIndex({ index: section - 1, animated: true });
    setSection(section - 1);
  } else {
    navigation.goBack()
  }
};

  const renderItem = ({ item }) => {
    return (
      <InteractiveBoarding
        {...item}
        id={item.id}
        handleNext={handleNext}
        handleBack={handleBack}
        style={styles.page}
      />
    );
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
          setSection(index);
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
    paddingVertical: dimensions.height * 0.035,
  },
  page: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
});
