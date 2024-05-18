import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

export default function Navigate({
  onPress = () => {},
  params = {},
  style = {},
  children,
  to,
}) {
  const navigation: any = useNavigation();

  const handlePress = () => {
    onPress();
    navigation.navigate(to, params);
  };

  return (
    <Pressable style={style} onPress={handlePress}>
      {children}
    </Pressable>
  );
}
