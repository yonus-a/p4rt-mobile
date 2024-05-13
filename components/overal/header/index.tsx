import Breadcrumb from "../breadcrumb";
import { View } from "react-native";
import Profile from "../../profile";
import styles from "./styles";
import Search from "../search";

export default function Header() {
  return (
    <View style={styles.header}>
      <Search />
      <Breadcrumb />
      <Profile />
    </View>
  );
}
