import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { bg_colors } from "../../theme/color.theme";

export default function OTPInput() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input automatically
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
      setFocusedIndex(index + 1);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
      setFocusedIndex(index - 1);
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => {
        const isFocused = index === focusedIndex;
        return (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={[
              styles.input,
              {
                backgroundColor: isFocused
                  ? bg_colors.reduced_orange
                  : bg_colors.button_bg_inactive,
                borderColor: isFocused
                  ? bg_colors.button_bg_active
                  : bg_colors.gray_color,
              },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onFocus={() => handleFocus(index)}
            autoFocus={index === 0}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: 80,
    height: 80,
    borderWidth: 2,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 8,
  },
});
