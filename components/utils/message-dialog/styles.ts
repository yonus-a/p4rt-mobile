import { CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  msgDialog: {
    flex: 1,
  },
  modalCta: {
    backgroundColor: CLR_WHITE,
    alignItems: "flex-start",
    borderRadius: 10,
    fontSize: 15,
    padding: 16,
  },
  content: {
    alignItems: "flex-start",
    gap: 15,
    paddingTop: 20,
  },
});
