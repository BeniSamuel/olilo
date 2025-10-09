import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dimensions from "../../theme/dimension.theme";

type FormPropType = {
  question: string;
};

const Form: React.FC<FormPropType> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Form</Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
  },
});
