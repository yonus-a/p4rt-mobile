import { Image, Pressable } from "react-native";

export default function PressableIcon({
  pressableStyle = {},
  iconStyle = {},
  onPress,
  srouce,
  alt,
}) {
  return (
    <Pressable onPress={onPress} style={pressableStyle}>
      <Image source={srouce} style={iconStyle} alt={alt} />
    </Pressable>
  );
}
