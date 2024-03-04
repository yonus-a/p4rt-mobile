import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

export default function Navigate({ to, children, style = {} }) {
  const navigation: any = useNavigation();

  return (
    <Pressable style={style} onPress={() => navigation.navigate(to)}>
      {children}
    </Pressable>
  );
}
