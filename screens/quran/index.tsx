import Container from "../../components/overal/container";
import Header from "../../components/overal/header";
import { WebView } from "react-native-webview";

export default function Quran() {
  return (
    <Container>
      <Header />
      <WebView
        source={{ uri: "https://tanzil.ir/#19:1" }}
        style={{ flex: 1, marginBottom: 100 }}
      />
    </Container>
  );
}
