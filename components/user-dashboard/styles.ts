import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../globalStyles";

export default StyleSheet.create({
  najva: {
    width: "100%",
    objectFit: "scale-down",
    height: 115,
  },
  ticker: {
    fontSize: 13,
    backgroundColor: CLR_WHITE,
    borderRadius: 10,
    paddingVertical: 10,
  },
  header: {
    gap: 15,
  },
});
