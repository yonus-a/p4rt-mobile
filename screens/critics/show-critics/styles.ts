import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    gap: 10,
  },
  showCritics: {
    flex: 1,
  },
  item: {
    borderRadius: 10,
    backgroundColor: CLR_WHITE,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    elevation: 3,
    padding: 16,
    gap: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  content: {
    alignItems: "flex-end",
    gap: 30,
  },
  hiddenItem: {
    padding: 20,
    height: "100%",
    justifyContent: "center",
  },
});
