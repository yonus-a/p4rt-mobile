import { useController } from "react-hook-form";
import { TextInput } from "react-native";
import styles from "./styles";

export default function Input({
  keyboardType = "default",
  numberOfLines = 2,
  multiline = false,
  placeholder = "",
  autoFocus = false,
  style = {},
  control,
  name,
}) {
  const { field } = useController({
    defaultValue: "",
    control,
    name,
  });

  const editorStyle = multiline
    ? {
        paddingVertical: 20,
        textAlignVertical: "top",
      }
    : {};

  return (
    <TextInput
      style={[styles.input, style, editorStyle]}
      keyboardType={keyboardType as any}
      onChangeText={field.onChange}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      multiline={multiline}
      autoFocus={autoFocus}
      value={field.value}
    />
  );
}
