import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  modal: {
    backgroundColor: CLR_WHITE,
    margin: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "70%",
  },
});
