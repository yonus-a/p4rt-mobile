import { CLR_PRIMARY, CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  addBtn: {
    flexDirection: "row",
    backgroundColor: CLR_PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 12.5,
    gap: 8,
  },
  text: {
    fontSize: 13,
    color: CLR_WHITE,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
