import { CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center",
    bottom: 0,
  },
  content: {
    backgroundColor: CLR_WHITE,
    width: 280,
    height: 280,
    borderRadius: 140,
    alignItems: "center",
    marginBottom: -78,
    padding: 15,
  },
  icon: {
    width: 40,
    height: 40,
  },
  flexWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    marginTop: -18,
  },
});
