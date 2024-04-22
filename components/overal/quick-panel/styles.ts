import { StyleSheet } from "react-native";

export default StyleSheet.create({
  quickPanel: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    height: 78,
    left: 0,
    bottom: 0,
    right: 0,
    paddingLeft: 45,
    paddingTop: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
  active: {
    width: 20,
    height: 30,
    marginTop: 10,
  },
  btn: {
    padding: 10
  },
});
