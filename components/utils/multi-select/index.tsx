import MultiSelect from "react-native-multiple-select";
import { useController } from "react-hook-form";
import styles from "./styles";

export default function CustomMultiSelect({
  defaultValue = [],
  items = [],
  title = "",
  control,
  name,
}) {
  const { field } = useController({
    defaultValue,
    control,
    name,
  });

  return (
    <MultiSelect
      styleMainWrapper={styles.main}
      onSelectedItemsChange={field.onChange}
      styleDropdownMenuSubsection={styles.input}
      selectedItems={field.value.map(Number)}
      styleTextDropdown={styles.text}
      selectText={title}
      uniqueKey="id"
      items={items}
    />
  );
}
