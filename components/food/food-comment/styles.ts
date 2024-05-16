import { CLR_BACKGROUND } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  modal: {
    backgroundColor: CLR_BACKGROUND,
    paddingVertical: 30,
    position: "absolute",
    height: "90%",
    margin: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  close: {
    paddingBottom: 20,
  }
});
