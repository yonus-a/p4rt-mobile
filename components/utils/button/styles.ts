import { CLR_PRIMARY, CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  btn: {
    backgroundColor: CLR_PRIMARY,
    borderRadius: 10,
    width: "100%",
    padding: 20,
  },
  btnText: {
    color: CLR_WHITE,
    textAlign: "center",
    fontWeight: "bold",
  },
});
