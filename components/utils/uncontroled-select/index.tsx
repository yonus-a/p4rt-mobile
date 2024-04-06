import { Picker } from "@react-native-picker/picker";
import { Shadow } from "react-native-shadow-2";
import styles from "./styles";

export default function UncontroledSelect({
  items = [],
  onChange,
  placeholder = "",
  defualtValue,
}) {
  return (
    <Shadow style={{ width: "100%", borderRadius: 10 }} distance={5}>
      <Picker
        selectedValue={defualtValue}
        onValueChange={onChange}
        placeholder={placeholder}
        style={styles.select}
      >
        {items.map(({ label, value }: any) => (
          <Picker.Item key={value} label={label} value={value} />
        ))}
      </Picker>
    </Shadow>
  );
}
