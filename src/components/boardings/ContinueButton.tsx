import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { bg_colors, text } from '../../theme/color.theme'

type ContinueButtonProps = {
    handleNext: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ handleNext }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNext}>
      <Text style={styles.text}>Continue</Text>
    </TouchableOpacity>
  )
}

export default ContinueButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: bg_colors.button_bg_active,
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderRadius: 25,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: "montserrat-semibold",
        color: text.button_text
    }
})