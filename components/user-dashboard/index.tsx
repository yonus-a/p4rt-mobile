import Container from "../overal/container";
import { Image } from "react-native";
import Slider from "./slider";
import styles from "./styles";

export default function UserDashboard() {
  return (
    <Container>
      <Slider />
      <Image
        style={styles.najva}
        source={require("../../assets/images/overal/najva.png")}
      />
    </Container>
  );
}
