import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  imageFood: {
    position: "relative",
    alignItems: "center",
    width: 280,
    height: 280,
  },
  image: {
    borderColor: "#DBDBDB",
    borderRadius: 500,
    borderWidth: 4,
    width: 280,
    height: 280,
  },
  likeBtn: {
    position: "absolute",
    zIndex: 99,
    bottom: 20,
    right: 0,
  },
  commentBtn: {
    position: "absolute",
    zIndex: 99,
    bottom: 20,
    left: 10,
  },
  commentModal: {
    position: "relative",
    top: "45%",
    backgroundColor: CLR_WHITE,
    elevation: 50,
    padding: 20,
    flex: 1,
  },
  closeBtn: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },
});
