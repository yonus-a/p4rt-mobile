import { Picker } from "@react-native-picker/picker";
import { useController } from "react-hook-form";
import styles from "./styles";

interface Props {
  placeholder?: string;
  defaultValue?: any;
  control: any;
  name: string;
  items: any;
}

export default function Select({
  defaultValue = "",
  placeholder = "",
  items = [],
  control,
  name,
}: Props) {
  const { field } = useController({
    defaultValue,
    control,
    name,
  });

  return (
    <Picker
      selectedValue={field.value}
      onValueChange={field.onChange}
      placeholder={placeholder}
      style={styles.select}
    >
      {items.map(({ label, value }: any) => (
        <Picker.Item key={value} label={label} value={value} />
      ))}
    </Picker>
  );
}
