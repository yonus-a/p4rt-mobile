import Navigate from "../navigate";
import { Image } from "react-native";

export default function NavigateIcon({
  navigateStyle = {},
  iconStyle = {},
  srouce,
  alt,
  to,
}) {
  return (
    <Navigate to={to} style={navigateStyle}>
      <Image source={srouce} style={iconStyle} alt={alt} />
    </Navigate>
  );
}
