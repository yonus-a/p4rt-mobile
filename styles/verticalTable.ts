import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../globalStyles";

export default StyleSheet.create({
  table: {
    gap: 16,
  },
  header: {
    fontSize: 17,
  },
  row: {
    elevation: 5,
    backgroundColor: CLR_WHITE,
    paddingHorizontal: 30,
    borderRadius: 14,
    padding: 15,
    gap: 15,
  },
  cell: {
    fontSize: 16,
  },
  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },
  odd: {
    backgroundColor: "#eee",
  },
});
