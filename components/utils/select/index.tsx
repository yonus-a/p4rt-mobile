import { Picker } from "@react-native-picker/picker";
import { useController } from "react-hook-form";
import { View } from "react-native";
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
    <View style={styles.wrapper}>
      <Picker
        onValueChange={field.onChange}
        selectedValue={field.value}
        placeholder={placeholder}
        style={styles.select}
      >
        {items.map(({ label, value }: any) => (
          <Picker.Item key={value} label={label} value={value} />
        ))}
      </Picker>
    </View>
  );
}
