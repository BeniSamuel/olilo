import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";
import books from "../../data/books/book.data";
import BookCard from "./BookCard";
import { Book } from "../../types/book.type";

const Journey = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Reading Journey</Text>
      <View style={styles.book_container}>
        {books.map((book: Book) => (
          <BookCard key={book.id} {...book} />
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
    gap: 15,
  },
  book_container: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  header: {
    fontFamily: "montserrat-bold",
  },
});
