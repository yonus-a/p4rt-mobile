import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerifyOTP from "./screens/verifyOTP";
import Dashborad from "./screens/dashboard";
import Signin from "./screens/singin";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Signin"
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="verifyOTP" component={VerifyOTP} />
      <Stack.Screen name="dashboard" component={Dashborad} />
    </Stack.Navigator>
  );
}
