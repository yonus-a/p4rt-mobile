import { ImageBackground } from "react-native";
import styles from "./styles";

export default function Splash() {
  return (
    <ImageBackground
      source={require("../../assets/splash.png")}
      resizeMode="cover"
      style={styles.splash}
    />
  );
}
