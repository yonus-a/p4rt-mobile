import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#23356D",
    paddingTop: 45,
    height: 150,
  },
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 15,
  },
  bg: {
    position: "absolute",
    height: 120,
    width: 250,
    right: 50,
    top: 20,
  },
  menu: {
    width: 30,
    height: 30,
  },
  flexWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 20,
    paddingRight: 14,
    marginRight: -3,
    paddingTop: 6,
    paddingLeft: 35,
    borderTopLeftRadius: 42,
    marginTop: -10,
    height: 100,
    borderColor: "#ffffff",
    zIndex: 99,
    borderWidth: 1,
  },
  text: {
    color: CLR_WHITE,
    zIndex: 99,
  },
  // circle: {
  //   position: "absolute",
  //   backgroundColor: "white",
  //   borderRadius: 1000,
  //   left: "-100%",
  //   top: 110,
  //   borderColor: "#F2F2F2",
  //   borderWidth: 5,
  //   elevation: 300,
  //   shadowColor: "#000",
  //   shadowOpacity: 1,
  //   shadowOffset: { width: 100, height: 110 },
  //   shadowRadius: 100,
  // },
});
