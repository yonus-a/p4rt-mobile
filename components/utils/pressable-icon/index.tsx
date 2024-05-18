import { Image, Pressable } from "react-native";
import CustomText from "../text";
import styles from "./styles";

export default function PressableIcon({
  pressableStyle = {},
  iconStyle = {},
  caption = null,
  onPress,
  srouce,
  alt,
}) {
  return (
    <Pressable onPress={onPress} style={[styles.pressable, pressableStyle]}>
      <Image source={srouce} style={iconStyle} alt={alt} />
      {caption && <CustomText>{caption}</CustomText>}
    </Pressable>
  );
}
