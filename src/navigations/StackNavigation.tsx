import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/stacks/signin/Signin";
import Signup from "../screens/stacks/signup/Signup";
import Otp from "../screens/stacks/otp-screen/Otp";
import Loading from "../screens/stacks/loading/Loading";
import TabNavigation from "./TabNavigation";
import Boarding from "../screens/stacks/boarding/Boarding";
import InfoBoarding from "../screens/stacks/boarding/InfoBoarding";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InfoBoarding" component={InfoBoarding} />
      <Stack.Screen name="Boarding" component={Boarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
};


export default StackNavigation;