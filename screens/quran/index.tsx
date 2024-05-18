import Container from "../../components/overal/container";
import Header from "../../components/overal/header";
import Menu from "../../components/overal/quick-panel";
import { WebView } from "react-native-webview";

export default function Quran() {
  return (
    <Container>
      <Header />
      <WebView
        source={{ uri: "https://tanzil.ir/#19:1" }}
        style={{ flex: 1, marginBottom: 100 }}
      />
      <Menu />
    </Container>
  );
}
