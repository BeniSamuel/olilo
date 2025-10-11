import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import React, { useRef } from "react";
import { bg_colors } from "../../../theme/color.theme";
import dimensions from "../../../theme/dimension.theme";
import useReviewStore from "../../../store/review_store/review.store";
import ReviewContainer from "../../../components/review/ReviewContainer";
import { Book, KeyPoint } from "../../../types/book.type";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

type ReviewScreenProps = {
  route: { params: { book: Book } };
};

const Review: React.FC<ReviewScreenProps> = ({ route }) => {
  const flatListRef = useRef<FlatList<KeyPoint>>(null);
  const { book } = route.params;
  const { section, setSection, logout } = useReviewStore();
  const navigation = useNavigation();

  const handleNext = () => {
    if (section < book.keyPoints.length - 1 && section !== 3) {
      flatListRef.current?.scrollToIndex({
        index: section + 1,
        animated: true,
      });
      setSection(section + 1);
    } else {
      navigation.navigate("AfterReview");
      logout();
    }
  };

  const handleBack = () => {
    if (section > 0) {
      flatListRef.current?.scrollToIndex({
        index: section - 1,
        animated: true,
      });
      setSection(section - 1);
    } else {
      navigation.goBack();
    }
  };

  const renderItem = ({ item }: { item: KeyPoint }) => (
    <ReviewContainer
      keyPoint={item}
      bookName={book.name}
      handleBack={handleBack}
      handleNext={handleNext}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={book.keyPoints}
        keyExtractor={(item) => item.id.toString()}
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

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg_colors.main_bg,
    paddingVertical: dimensions.height * 0.035,
    paddingHorizontal: dimensions.width * 0.035,
  },
});
