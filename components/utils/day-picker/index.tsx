import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import styles from "./styles";

export default function DayPicker({ onChange, selected }) {
  return (
    <View style={styles.dayPicker}>
      <Picker onValueChange={onChange} selectedValue={selected}>
        <Picker.Item label={"شنبه"} value={6} />
        <Picker.Item label={"یکشنبه"} value={0} />
        <Picker.Item label={"دوشنبه"} value={1} />
        <Picker.Item label={"سه شنبه"} value={2} />
        <Picker.Item label={"چهار شنبه"} value={3} />
        <Picker.Item label={"پنج شنبه"} value={4} />
        <Picker.Item label={"چمعه"} value={5} />
      </Picker>
    </View>
  );
}
