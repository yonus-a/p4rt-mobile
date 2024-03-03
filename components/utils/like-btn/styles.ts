import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  likeBtn: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    borderRadius: 500,
    backgroundColor: CLR_WHITE,
    justifyContent: "center",
    borderColor: "#DBDBDB",
    alignItems: "center",
    borderWidth: 3,
    height: 40,
    width: 40,
  },
  count: {},
  image: {
    width: 24,
    height: 24,
  },
});
