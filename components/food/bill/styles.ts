import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../styles/globalStyles";

export default StyleSheet.create({
  bill: {
    backgroundColor: CLR_WHITE,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 10,
    padding: 16,
    gap: 10,
  },
  price: {
    fontSize: 17,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    marginTop: 20,
  },
});
