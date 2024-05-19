import { CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  dateInput: {
    padding: 8,
    backgroundColor: CLR_WHITE,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    color: "#555",
    gap: 10,
    flex: 1,
  },
  calendar: {
    width: 30,
    height: 30,
  },
  icon: {
    width: 25,
    height: 25,
  },
  flexWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
