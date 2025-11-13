import { StyleSheet, View } from "react-native";
import React from "react";
import AnswerCard from "./AnswerCard";

type AnswerType = {
  id: number;
  answer: string;
  result: string;
};

type AnswersBoxProp = {
  answers: AnswerType[];
};

const AnswersBox: React.FC<AnswersBoxProp> = ({ answers }) => {
  return (
    <View style={styles.container}>
      {answers.map((answer) => (
        <AnswerCard
          key={answer.id}
          id={answer.id}
          answer={answer.answer}
          result={answer.result}
        />
      ))}
    </View>
  );
};

export default AnswersBox;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
