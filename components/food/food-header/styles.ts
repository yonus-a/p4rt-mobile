import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#23356D",
    paddingTop: 45,
    height: 160,
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
  circle: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 1000,
    left: "-100%",
    top: 110,
    borderColor: "#F2F2F2",
    borderWidth: 5,
    elevation: 300,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 100, height: 110 },
    shadowRadius: 100,
  },
});
