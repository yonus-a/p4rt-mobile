import MultiSelect from "react-native-multiple-select";
import { useController } from "react-hook-form";
import { Shadow } from "react-native-shadow-2";
import styles from "./styles";

export default function CustomMultiSelect({
  defaultValue = [],
  items = [],
  control,
  title = "",
  name,
}) {
  const { field } = useController({
    defaultValue,
    control,
    name,
  });

  return (
    <Shadow style={{ width: "100%", borderRadius: 10 }} distance={5}>
      <MultiSelect
        styleMainWrapper={styles.main}
        onSelectedItemsChange={field.onChange}
        styleDropdownMenuSubsection={styles.input}
        styleTextDropdown={styles.text}
        selectedItems={field.value.map(Number)}
        selectText={title}
        uniqueKey="id"
        items={items}
      />
    </Shadow>
  );
}
