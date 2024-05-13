import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  quickPanel: {
    flexDirection: "row",
    paddingVertical: 18,
    alignItems: "center",
    backgroundColor: CLR_WHITE,
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
  },
  icon: {
    width: 28,
    height: 28,
  },
});
