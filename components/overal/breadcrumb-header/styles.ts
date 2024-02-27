import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#23356D",
    paddingTop: 45,
    height: 140,
  },
  container: {
    justifyContent: "space-between",
    marginHorizontal: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  bg: {
    position: "absolute",
    height: 150,
    width: 250,
    right: 0,
    top: -10,
  },
  menu: {
    width: 30,
    height: 30,
  },
  flexWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 16,
    color: CLR_WHITE,
  },
});
