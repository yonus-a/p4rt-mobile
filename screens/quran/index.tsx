import Container from "../../components/overal/container";
import { WebView } from "react-native-webview";
import styles from "../splash/styles";
import { View } from "react-native";

export default function Quran() {
  return (
    <Container>
      <WebView source={{ uri: "https://tanzil.ir/#19:1" }} />
    </Container>
  );
}
