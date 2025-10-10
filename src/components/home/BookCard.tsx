import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { text } from "../../theme/color.theme";
import dimensions from "../../theme/dimension.theme";
import { useNavigation } from "@react-navigation/native";

type BookCardProp = {
  name: string;
  status_description: string;
  status: string;
};

const BookCard: React.FC<BookCardProp> = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.book_indicators}>
        <View>
          <Image source={require("../../../assets/home/book_review.png")} resizeMode="contain" style={{width: 25 , height: 25 }}/>
        </View>
        <View>
          <Text style={styles.book_name} onPress={() => navigation.navigate("Review")}>{props.name}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.book_status_description, {color: props.status === "done" ? "#53BE15" : "#FFCA28"}]}>{props.status_description}</Text>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: text.button_text,
    paddingVertical: dimensions.height * 0.02,
    paddingHorizontal: dimensions.width * 0.025,
    borderRadius: 15,
    elevation: 0.6
  },
  book_indicators: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  book_name: {
    fontFamily: "montserrat-medium",
    color: text.color,
  },
  book_status_description: {
    fontFamily: "montserrat-semibold"
  }
});
