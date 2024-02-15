import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styles";
import Routes from "./routes";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}
