import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  renderCartItems: {
    gap: 24,
  },
  item: {
    justifyContent: "flex-end",
    borderRadius: 16,
    elevation: 10,
    backgroundColor: CLR_WHITE,
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
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
  colRight: {},
});
