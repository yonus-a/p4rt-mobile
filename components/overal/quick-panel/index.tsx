import { Image, ImageBackground } from "react-native";
import Navigate from "../../utils/navigate";
import styles from "./styles";

export default function QuickPanel() {
  return (
    <ImageBackground
      source={require("../../../assets/icons/panel.png")}
      style={styles.quickPanel}
      resizeMode="cover"
    >
      <Navigate to="home">
        <Image
          source={require("../../../assets/icons/home.png")}
          style={styles.image}
          width={30}
          height={30}
          alt="home"
        />
      </Navigate>
      <Navigate to="addCritics">
        <Image
          source={require("../../../assets/icons/mail.png")}
          style={styles.image}
          width={30}
          height={30}
          alt="mail"
        />
      </Navigate>
      <Navigate to="cart">
        <Image
          source={require("../../../assets/icons/cart.png")}
          style={styles.image}
          width={30}
          height={30}
          alt="cart"
        />
      </Navigate>
    </ImageBackground>
  );
}
