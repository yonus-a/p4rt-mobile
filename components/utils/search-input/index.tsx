import { TextInput } from "react-native";
import styles from "./styles";

export default function SearchInputs({ setSearch }) {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="جستجو کنید..."
      onChangeText={setSearch}
    />
  );
}
