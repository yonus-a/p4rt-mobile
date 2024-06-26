import { CLR_BACKGROUND, CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  search: {},
  icon: {
    width: 45,
    height: 45,
  },
  modal: {
    backgroundColor: CLR_BACKGROUND,
    justifyContent: "flex-start",
    margin: 0,
  },
  closeBtn: {
    paddingVertical: 20,
  },
});
