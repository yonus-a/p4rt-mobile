import { Image } from "react-native";
import Navigate from "../navigate";
import styles from "./styles";

export default function EditLink({ to, style = {}, params = {} }) {
  return (
    <Navigate to={to} style={[style]} params={params}>
      <Image
        source={require("../../../assets/icons/edit.png")}
        style={styles.image}
        alt="delete"
      />
    </Navigate>
  );
}
