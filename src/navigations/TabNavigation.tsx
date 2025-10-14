import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../screens/tabs/home/Home";
import Challenge from "../screens/tabs/challenge/Challenge";
import Creation from "../screens/tabs/creation/Creation";
import Premium from "../screens/tabs/premium/Premium";
import Account from "../screens/tabs/account/Account";
import { bg_colors } from "../theme/color.theme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: { fontFamily: "montserrat-medium" },
        tabBarActiveTintColor: bg_colors.button_bg_active,
        tabBarIcon: ({ focused }) => {
          let icon;

          switch (route.name) {
            case "Home":
              icon = focused
                ? require("../../assets/common/home-active-icon.png")
                : require("../../assets/common/home-inactive-icon.png");
              break;
            case "Challenge":
              icon = focused
                ? require("../../assets/common/challenge-active-icon.png")
                : require("../../assets/common/challenge-inactive-icon.png");
              break;
            case "Creation":
              icon = focused
                ? require("../../assets/common/creation-active-icon.png")
                : require("../../assets/common/creation-inactive-icon.png");
              break;
            case "Premium":
              icon = focused
                ? require("../../assets/common/premium-active-icon.png")
                : require("../../assets/common/premium-inactive-icon.png");
              break;
            case "Account":
              icon = focused
                ? require("../../assets/common/account-active-icon.png")
                : require("../../assets/common/account-inactive-icon.png");
          }

          return (
            <Image
              source={icon}
              style={{ width: 16, height: 16 }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Challenge" component={Challenge} />
      <Tab.Screen name="Creation" component={Creation} />
      <Tab.Screen name="Premium" component={Premium} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
