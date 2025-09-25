import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tabs/home/Home";
import Challenge from "../screens/tabs/challenge/Challenge";
import Creation from "../screens/tabs/creation/Creation";
import Premium from "../screens/tabs/premium/Premium";
import Account from "../screens/tabs/account/Account";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Challenge" component={Challenge} />
      <Tab.Screen name="Creation" component={Creation} />
      <Tab.Screen name="Premium" component={Premium} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};


export default TabNavigation;