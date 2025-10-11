import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/stacks/signin/Signin";
import Signup from "../screens/stacks/signup/Signup";
import Otp from "../screens/stacks/otp-screen/Otp";
import Loading from "../screens/stacks/loading/Loading";
import TabNavigation from "./TabNavigation";
import Boarding from "../screens/stacks/boarding/Boarding";
import InfoBoarding from "../screens/stacks/boarding/InfoBoarding";
import Status from "../screens/stacks/status/Status";
import AfterSignup from "../screens/stacks/status/AfterSignup";
import Review from "../screens/stacks/review/Review";
import AfterReview from "../screens/stacks/status/AfterReview";

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
      <Stack.Screen name="Tabs" component={TabNavigation} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="AfterSignup" component={AfterSignup} />
      <Stack.Screen name="Review" component={Review}/>
      <Stack.Screen name="AfterReview" component={AfterReview} />
    </Stack.Navigator>
  );
};


export default StackNavigation;