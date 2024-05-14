import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  quickPanel: {
    flexDirection: "row",
    paddingVertical: 18,
    alignItems: "center",
    backgroundColor: CLR_WHITE,
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 999,
    height: 70,
    left: 0,
  },
  icon: {
    width: 28,
    height: 28,
  },
  logo: {
    width: 40,
    height: 40,
  },
  backDrop: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
});
