import DatePicker from "../custom-calender/src";
import { View } from "react-native";
import styles from "./styles";

export default function Calender({ onChange, defaultDate = "" }) {
  return (
    <View style={styles.container}>
      <DatePicker
        onDateChange={(date) => onChange(date)}
        style={styles.calender}
        selected={defaultDate}
      />
    </View>
  );
}
