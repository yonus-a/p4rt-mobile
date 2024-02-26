import { useController } from "react-hook-form";
import { TextInput } from "react-native";
import styles from "./styles";

interface Props {
  placeholder?: string;
  multiline?: boolean;
  name: string;
  control: any;
  style?: any;
}

export default function Input({
  multiline = false,
  placeholder = "",
  style = {},
  control,
  name,
}: Props) {
  const { field } = useController({
    defaultValue: "",
    control,
    name,
  });

  return (
    <TextInput
      onChangeText={field.onChange}
      placeholder={placeholder}
      style={[styles.input, style]}
      value={field.value}
      multiline={multiline}
      numberOfLines={4}
      editable
    />
  );
}
