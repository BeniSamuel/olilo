import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import dimensions from "../../../theme/dimension.theme";
import { StatusBar } from "expo-status-bar";
import { bg_colors } from "../../../theme/color.theme";
import { Challenges } from "../../../types/challenge.type";
import TopChallenge from "../../../components/challenge/TopChallenge";
import ChallengeCard from "../../../components/challenge/ChallengeCard";
import useChallengeStore from "../../../store/challenge_store/challenge.store";

const { width } = Dimensions.get("window");

type ChallengeStackParams = {
  route: { params: { challenges: Challenges[] } };
};

const ChallengeStack: React.FC<ChallengeStackParams> = ({ route }) => {
  const { challenges } = route.params;
  const flatListRef = useRef<FlatList<Challenges>>(null);
  const { section, setSection } = useChallengeStore();

  const renderItem = ({ item }: { item: Challenges }) => {
    return (
      <ChallengeCard
        id={item.id}
        title={item.title}
        questions={item.questions}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <TopChallenge handleBack={() => alert("clicked")} />
      </View>
      <View>
        <FlatList
          ref={flatListRef}
          data={challenges}
          keyExtractor={(item) => item.id.toString()}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
           onMomentumScrollEnd={(ev) => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / width);
          setSection(index);
        }}
        />
      </View>
    </View>
  );
};

export default ChallengeStack;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.035,
    paddingHorizontal: dimensions.width * 0.035,
    backgroundColor: bg_colors.main_bg,
    flex: 1,
  },
});
