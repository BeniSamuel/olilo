import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { bg_colors, text } from '../../theme/color.theme';

type ButtonProp = {
    button_text: string;
    handlePress: () => void;
}

const Button: React.FC<ButtonProp> = ({ button_text, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Text style={styles.text}>{button_text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
      backgroundColor: bg_colors.button_bg_active,
      paddingHorizontal: 12,
      paddingVertical: 14,
      borderRadius: 25,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontFamily: "montserrat-semibold",
      color: text.button_text,
    },
})