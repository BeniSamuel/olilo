import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { bg_colors, text } from "../../../theme/color.theme";
import dimensions from "../../../theme/dimension.theme";
import BackButton from "../../../components/common/BackButton";
import { useNavigation } from "@react-navigation/native";
import OTPInput from "../../../components/Otp/OtpInput";

const Otp = () => {
  const navigation = useNavigation();

  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Countdown effect
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Resend handler
  const handleResend = () => {
    setCanResend(false);
    setTimer(60);
    console.log("OTP resent!");
    // You could also call your resend OTP API here
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_holders}>
        <BackButton handleBack={() => navigation.goBack()} />

        <View style={styles.description_container}>
          <Text style={styles.header}>You've got mail</Text>
          <Text style={styles.description_text}>
            We have sent the OTP verification code to your email address. Check
            your email and enter the code below.
          </Text>
        </View>

        <View style={styles.email_container}>
          <OTPInput />

          <View style={styles.assistance_container}>
            <Text style={styles.assistance_text}>Didn't receive an email?</Text>

            {canResend ? (
              <TouchableOpacity onPress={handleResend}>
                <Text style={[styles.assistance_text, { color: bg_colors.button_bg_active }]}>
                  Resend code
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.assistance_text}>
                You can resend code in{" "}
                <Text style={{ color: bg_colors.button_bg_active }}>
                  {timer}
                </Text>{" "}
                s
              </Text>
            )}
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PasswordCreation")}
        >
          <Text style={styles.button_text}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bg_colors.main_bg,
    flex: 1,
    paddingVertical: dimensions.height * 0.035,
    paddingHorizontal: dimensions.width * 0.035,
    justifyContent: "space-between",
  },
  input_holders: {
    gap: 20,
  },
  button: {
    backgroundColor: bg_colors.button_bg_active,
    paddingVertical: dimensions.height * 0.02,
    borderRadius: 25,
    alignItems: "center",
  },
  button_text: {
    fontFamily: "montserrat-semibold",
    color: text.button_text,
  },
  description_container: {
    gap: 20,
  },
  header: {
    fontFamily: "montserrat-bold",
  },
  description_text: {
    fontFamily: "montserrat-medium",
    color: text.color,
    lineHeight: 25,
  },
  email_container: {
    gap: 15,
    paddingVertical: dimensions.height * 0.045,
  },
  assistance_container: {
    alignItems: "center",
    paddingVertical: dimensions.height * 0.02,
    gap: 12,
  },
  assistance_text: {
    fontFamily: "montserrat-semibold",
    color: text.color,
  },
});
