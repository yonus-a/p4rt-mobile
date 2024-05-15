import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  text: {
    fontSize: 13,
    maxWidth: "80%",
  },
  item: {
    padding: 10,
    paddingLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    gap: 20,
    backgroundColor: "red",
  },
  image: {
    width: 35,
    height: 35,
    objectFit: "cover",
    borderRadius: 17,
  },
  listWrapper: {
    paddingVertical: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
