import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

export default function Navigate({ to, children, style = {}, params = {} }) {
  const navigation: any = useNavigation();

  return (
    <Pressable style={style} onPress={() => navigation.navigate(to, params)}>
      {children}
    </Pressable>
  );
}
