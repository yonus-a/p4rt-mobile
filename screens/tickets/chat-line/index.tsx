import { Pressable, View, Text } from "react-native";
import styles from "./styles";

export default function ChatLine({ message, attachment }) {
  return (
    <View style={styles.chatLine}>
      <Text style={styles.line}>
        {message}
        {attachment !== "" && (
          <Pressable style={styles.attachment}>
            <Text>فایل ضمیمه</Text>
          </Pressable>
        )}
      </Text>
    </View>
  );
}
