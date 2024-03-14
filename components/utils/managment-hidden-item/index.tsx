import { View, Image } from "react-native";
import DeleteBtn from "../delete-btn";
import Navigate from "../navigate";
import styles from "./styles";

export default function MangmentHiddenItem({ item, onPress }) {
  return (
    <View style={styles.actions}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <DeleteBtn onPress={onPress} />
        <Navigate to="editFood" params={{ id: item.id }}>
          <Image
            source={require("../../../assets/icons/edit.png")}
            style={styles.icon}
          />
        </Navigate>
      </View>
    </View>
  );
}
