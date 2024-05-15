import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  shifts: {
    flexDirection: "row",
    gap: 10,
  },
  shift: {
    padding: 8,
    borderRadius: 8,
    flex: 1,
  },
  shiftText: {
    color: CLR_WHITE,
    textAlign: "center",
  },
});
