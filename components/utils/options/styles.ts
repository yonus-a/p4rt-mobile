import { CLR_BACKGROUND, CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modal: {
    margin: 0,
  },
  wrapper: {
    backgroundColor: CLR_BACKGROUND,
    position: "absolute",
    borderRadius: 10,
    paddingTop: 20,
    height: "50%",
    padding: 10,
    bottom: 0,
    left: 0,
    right: 0,
    gap: 10,
  },
});
