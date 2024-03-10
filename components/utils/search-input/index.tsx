import { TextInput } from "react-native";
import styles from "./styles";

export default function SearchInputs({ setSearch, style = {} }) {
  return (
    <TextInput
      style={[styles.searchInput, style]}
      placeholder="جستجو کنید..."
      onChangeText={setSearch}
    />
  );
}
