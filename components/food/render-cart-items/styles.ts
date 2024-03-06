import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  renderCartItems: {
    gap: 24,
  },
  item: {
    borderRadius: 16,
    justifyContent: "flex-end",
    backgroundColor: CLR_WHITE,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
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
  colRight: {
    flex: 0.8,
  },
});
