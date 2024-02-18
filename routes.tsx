import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
    </Stack.Navigator>
  );
}
