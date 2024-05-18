import { CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  renderFoods: {
    backgroundColor: CLR_WHITE,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    elevation: 3,
    gap: 20,
  },
});
