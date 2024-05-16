import { CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  topPosts: {
    backgroundColor: CLR_WHITE,
    borderRadius: 10,
    width: "100%",
    paddingBottom: 10,
  },
  flexWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  carousel: {
    width: "100%",
    gap: 10,
  },
  card: {
    position: "relative",
    justifyContent: "flex-end",
    marginLeft: 10,
    height: "100%",
  },
  icon: {
    width: 10,
    height: 10,
  },
  more: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    borderRadius: 10,
    objectFit: "cover",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
  },
  title: {
    color: CLR_WHITE,
    backgroundColor: "rgba(0, 0, 0, .5)",
    fontSize: 11,
    padding: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
