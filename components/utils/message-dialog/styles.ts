import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  msgDialog: {
    flex: 1,
  },
  modalCta: {
    backgroundColor: CLR_WHITE,
    borderRadius: 10,
    elevation: 10,
    padding: 20,
    fontSize: 15,
  },
  content: {
    alignItems: "flex-end",
    gap: 15,
  },
  text: {
    fontSize: 16,
  },
});
