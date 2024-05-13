import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  content: {
    backgroundColor: CLR_WHITE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 40,
    gap: 30,
    flex: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icon: { width: 40, height: 40 },
});
