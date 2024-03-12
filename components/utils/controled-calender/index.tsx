import DatePicker from "@mohamadkh75/react-native-jalali-datepicker";
import { useController } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function ControledCalender({
  onChange = () => {},
  control,
  name,
}) {
  var { field } = useController({
    control,
    name,
  });

  const handleChange = (data) => {
    field.onChange(data);
    onChange();
  };

  return (
    <View style={styles.container}>
      <DatePicker
        onDateChange={handleChange}
        style={styles.calender}
        selected={field.value}
      />
    </View>
  );
}
