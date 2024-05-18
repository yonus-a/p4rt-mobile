import Navigate from "../navigate";
import { Image } from "react-native";
import CustomText from "../text";
import styles from "./styles";

export default function NavigateIcon({
  navigateStyle = {},
  iconStyle = {},
  caption = null,
  onPress = () => {},
  srouce,
  alt,
  to,
}) {
  return (
    <Navigate to={to} style={[styles.navigate, navigateStyle]} onPress={onPress}>
      <Image source={srouce} style={iconStyle} alt={alt} />
      {caption && <CustomText>{caption}</CustomText>}
    </Navigate>
  );
}
