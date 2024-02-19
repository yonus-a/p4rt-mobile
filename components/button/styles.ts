import { StyleSheet } from "react-native";
import { CLR_PRIMARY, CLR_WHITE } from "../../styles";

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
