import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  quickPanel: {
    backgroundColor: CLR_WHITE,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    width: 1160,
    height: 1174,
    bottom: -1000,
    gap: 55,
    borderTopLeftRadius: 508,
    borderTopRightRadius: 508,
  },
  image: {
    width: 30,
    height: 30,
  },
});
