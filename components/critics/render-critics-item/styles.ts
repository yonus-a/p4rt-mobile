import { CLR_BACKGROUND, CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    borderRadius: 10,
    backgroundColor: CLR_WHITE,
    alignItems: "center",
    flexDirection: "row",
    elevation: 3,
    padding: 16,
    gap: 20,
  },
  wrapper: {
    width: "100%",
    alignItems: "flex-start",
    gap: 15,
  },
  content: {
    justifyContent: "space-between",
    backgroundColor: CLR_BACKGROUND,
    marginBottom: 30,
  },
  modal: {
    backgroundColor: "red",
  },
  icon: {
    width: 40,
    height: 40,
  },
  closeBtn: {
    paddingVertical: 15,
  },
});
