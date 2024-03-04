import { CLR_PRIMARY } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  btn: {
    backgroundColor: CLR_PRIMARY,
    borderRadius: 1000,
    width: 75,
    height: 75,
    justifyContent: "center",
    position: "absolute",
    top: "50%",
  },
  image: {
    width: 28,
    height: 28,
  },
  prev: {
    left: -35,
    paddingLeft: 42,
  },
  next: {
    right: -38,
    paddingLeft: 3
  },
});
