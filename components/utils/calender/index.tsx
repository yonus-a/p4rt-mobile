import DatePicker from "@mohamadkh75/react-native-jalali-datepicker";
import { View } from "react-native";
import styles from "./styles";

export default function Calender({ onChange }) {
  return (
    <View style={styles.container}>
      <DatePicker onDateChange={onChange} style={styles.calender} />
    </View>
  );
}
