import { Image, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import useUserId from "../../../hooks/useUserId";
import Navigate from "../../utils/navigate";
import styles from "./styles";

export default function QuickPanel() {
  const route = useRoute();
  const isHome = route.name === "dashboard";
  const isCritics = route.name === "critics";
  const isCart = route.name === "foods";

  const userId = useUserId();
  const isManager = userId === "4060588326";
  const critics = isManager ? "showCritics" : "critics";

  return (
    <ImageBackground
      source={require("../../../assets/icons/panel.png")}
      style={styles.quickPanel}
      resizeMode="cover"
    >
      <Navigate to="dashboard">
        {isHome ? (
          <Image
            source={require(`../../../assets/icons/active-home.png`)}
            style={styles.active}
            alt="home"
          />
        ) : (
          <Image
            source={require(`../../../assets/icons/home.png`)}
            style={styles.image}
            alt="home"
          />
        )}
      </Navigate>
      <Navigate to={critics}>
        {isCritics ? (
          <Image
            source={require("../../../assets/icons/active-mail.png")}
            style={styles.active}
            alt="mail"
          />
        ) : (
          <Image
            source={require("../../../assets/icons/mail.png")}
            style={styles.image}
            alt="mail"
          />
        )}
      </Navigate>
      <Navigate to="foods">
        {isCart ? (
          <Image
            source={require("../../../assets/icons/active-cart.png")}
            style={[styles.active, { width: 20, height: 40, marginTop: 20 }]}
            alt="cart"
          />
        ) : (
          <Image
            source={require("../../../assets/icons/cart.png")}
            style={styles.image}
            alt="cart"
          />
        )}
      </Navigate>
    </ImageBackground>
  );
}
