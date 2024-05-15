import { Pressable, View } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function Shifts({ shift, setShift }) {
  return (
    <View style={styles.shifts}>
      <Pressable
        style={[
          styles.shift,
          { backgroundColor: "#FFC300" },
          shift && shift !== 1 ? { backgroundColor: "#ccc" } : {},
        ]}
        onPress={() => setShift(1)}
      >
        <CustomText style={styles.shiftText}>صبح</CustomText>
      </Pressable>
      <Pressable
        style={[
          styles.shift,
          { backgroundColor: "#FB5607" },
          shift && shift !== 2 ? { backgroundColor: "#ccc" } : {},
        ]}
        onPress={() => setShift(2)}
      >
        <CustomText style={styles.shiftText}>ظهر</CustomText>
      </Pressable>
      <Pressable
        style={[
          styles.shift,
          { backgroundColor: "#001D3D" },
          shift && shift !== 3 ? { backgroundColor: "#ccc" } : {},
        ]}
        onPress={() => setShift(3)}
      >
        <CustomText style={styles.shiftText}>شب</CustomText>
      </Pressable>
    </View>
  );
}
