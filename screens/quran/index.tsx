import Container from "../../components/overal/container";
import Menu from "../../components/overal/quick-panel";
import Header from "../../components/overal/header";
import { WebView } from "react-native-webview";
import { View } from "react-native";

export default function Quran() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Container>
        <WebView
          source={{ uri: "https://tanzil.ir/#19:1" }}
          style={{ flex: 1, marginBottom: 90 }}
        />
      </Container>
      <Menu />
    </View>
  );
}
