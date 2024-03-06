import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../globalStyles";

export default StyleSheet.create({
  table: {
    gap: 10,
  },
  header: {
    fontSize: 13,
  },
  row: {
    elevation: 5,
    shadowColor: "#555",
    backgroundColor: CLR_WHITE,
    paddingHorizontal: 30,
    borderRadius: 14,
    padding: 15,
    gap: 8,
  },
  cell: {
    fontSize: 13,
  },
  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },
  odd: {
    backgroundColor: "#eee",
  },
});
