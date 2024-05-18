import { CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    fontSize: 13,
    paddingRight: 5,
    width: "100%",
  },
  showComments: {
    marginVertical: 35,
    gap: 10,
  },
  item: {
    padding: 15,
    paddingLeft: 20,
    backgroundColor: CLR_WHITE,
    alignItems: "flex-start",
    borderRadius: 10,
    elevation: 3,
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
    fontSize: 12,
  },
  deleteBtn: {
    alignSelf:"flex-start"
  }
});
