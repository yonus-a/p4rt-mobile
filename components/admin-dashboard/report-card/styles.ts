import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../styles/globalStyles";

export default StyleSheet.create({
  reportCard: {
    backgroundColor: CLR_WHITE,
    borderRadius: 10,
    width: "47%",
    padding: 15,
    paddingVertical: 20,
  },
  wrapper: {
    flexDirection: "row",
    gap: 20,
  },
  desc: {
    fontSize: 13,
    marginTop: 16,
    textAlign: "center",
    color: CLR_WHITE,
  },
  amount: {
    fontFamily: "Aria",
    fontWeight: "bold",
    textAlign: "center",
    color: CLR_WHITE,
    fontSize: 24,
  },
});
