import { CLR_BACKGROUND, CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    fontSize: 13,
    maxWidth: "95%",
    paddingRight: 5
  },
  item: {
    padding: 15,
    paddingLeft: 20,
    backgroundColor: CLR_WHITE,
    alignItems: "flex-start",
    borderRadius: 10,
    gap: 8,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 35,
    height: 35,
    objectFit: "cover",
    borderRadius: 17,
  },
  name: {
    fontSize: 12
  }
});
