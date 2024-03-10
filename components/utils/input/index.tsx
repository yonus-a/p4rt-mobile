import { useController } from "react-hook-form";
import { Shadow } from "react-native-shadow-2";
import { TextInput } from "react-native";
import styles from "./styles";

interface Props {
  numberOfLines?: number;
  placeholder?: string;
  multiline?: boolean;
  editable?: boolean;
  name: string;
  control: any;
  style?: any;
}

export default function Input({
  numberOfLines = 2,
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

  const editorStyle = multiline
    ? {
        paddingVertical: 20,
        textAlignVertical: "top",
      }
    : {};

  return (
    <Shadow style={{ width: "100%", borderRadius: 10 }} distance={5}>
      <TextInput
        style={[styles.input, style, editorStyle]}
        onChangeText={field.onChange}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        multiline={multiline}
        value={field.value}
      />
    </Shadow>
  );
}
