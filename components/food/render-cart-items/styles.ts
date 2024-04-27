import { CLR_PRIMARY, CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  renderCartItems: {
    gap: 24,
  },
  item: {
    borderRadius: 16,
    backgroundColor: CLR_WHITE,
    flexDirection: "column",
    width: "100%",
    padding: 13,
  },
  flexWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 30,
  },

  iamge: {
    borderRadius: 10,
    width: 117,
    height: 85,
  },
  price: {
    justifyContent: "center",
    gap: 32,
  },
  title: {
    marginBottom: 24,
    fontSize: 18,
  },
  colRight: {
    flex: 0.8,
  },
  shiftWrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  activeShift: {
    backgroundColor: CLR_PRIMARY,
    color: CLR_WHITE,
  },
  shiftBtn: {
    borderColor: CLR_PRIMARY,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    padding: 13,
  },
});
