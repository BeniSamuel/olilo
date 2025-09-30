import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import books from "../../data/books/book.data";
import BookCard from "./BookCard";

const Journey = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Reading Journey</Text>
      <View style={styles.book_container}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            name={book.name}
            status_description={book.status_description}
            status={book.status}
          />
        ))}
      </View>
    </View>
  );
};

export default Journey;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.035,
    display: "flex",
    flexDirection: "column",
    gap: 15
  },
  book_container: {
    display: "flex",
    flexDirection: "column",
    gap: 15
  },
  header: {
    fontFamily: "montserrat-bold"
  }
});
