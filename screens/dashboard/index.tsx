import Header from "../../components/overal/header/indexx";
import { View } from "react-native";
import styles from "./styles";

export default function Dashborad({ navigation }: any) {
  return (
    <View style={styles.dashborad}>
      <Header navigation={navigation} />
    </View>
  );
}
