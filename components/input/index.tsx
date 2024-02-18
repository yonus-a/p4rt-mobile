import { useController } from "react-hook-form";
import { TextInput } from "react-native";
import styles from "./styles";

interface Props {
  name: string;
  control: any;
}

export default function Input({ name, control }: Props) {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <TextInput
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
    />
  );
}
