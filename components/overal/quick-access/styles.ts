import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  quickAccess: {},
  logo: {
    width: 40,
    height: 40,
  },
  backDrop: {
    position: "relative",
    zIndex: 1,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, .3)",
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    zIndex: 2,
    bottom: 0,
  },
  content: {
    backgroundColor: CLR_WHITE,
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    padding: 15,
  },
  icon: {
    width: 35,
    height: 35,
  },
  flexWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: -12,
    marginBottom: 19,
  },
});
