import { StyleSheet } from "react-native";
export default StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#23356D",
    borderBottomStartRadius: 180,
    borderBottomEndRadius: 180,
    paddingTop: 45,
    height: 233,
  },
  container: {
    justifyContent: "space-between",
    marginHorizontal: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  bg: {
    position: "absolute",
    height: 150,
    width: 250,
    right: 0,
    top: -10,
  },
  menu: {
    width: 30,
    height: 30,
  },
});
