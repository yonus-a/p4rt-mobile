import MultiSelect from "react-native-multiple-select";
import { useController } from "react-hook-form";
import { Shadow } from "react-native-shadow-2";

export default function CustomMultiSelect({
  defaultValue = [],
  items = [],
  control,
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
        onSelectedItemsChange={field.onChange}
        selectedItems={field.value}
        uniqueKey="id"
        items={items}
      />
    </Shadow>
  );
}
