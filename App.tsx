import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigations/StackNavigation";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "montserrat-regular": require("./assets/font/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./assets/font/Montserrat-Medium.ttf"),
    "montserrat-semibold": require("./assets/font/Montserrat-SemiBold.ttf"),
    "montserrat-bold": require("./assets/font/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
