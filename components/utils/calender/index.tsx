import DatePicker from "@mohamadkh75/react-native-jalali-datepicker";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function Calender({ onChange }) {
  const [selected, setSelected] = useState("1403/01/13");

  return (
    <View style={styles.container}>
      <DatePicker
        onDateChange={(date) => {
          onChange(date);
          setSelected(date);
        }}
        style={styles.calender}
        {...(selected ? { selected } : {})}
      />
    </View>
  );
}
