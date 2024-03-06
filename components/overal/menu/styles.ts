import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  topSection: {
    backgroundColor: "#182858",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 170,
    paddingBottom: 20,
  },
  logo: {
    width: 200,
    height: 120,
  },
  drawer: {
    backgroundColor: "#182858",
    marginTop: 0,
    paddingTop: 0,
  },
  container: {
    backgroundColor: CLR_WHITE,
    // marginHorizontal: 15,
    // marginBottom: 15,
    elevation: 2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
  },
  wrapper: {
    alignItems: "center",
    marginTop: 50,
    paddingBottom: 5,
  },
  text: {
    color: "#555",
  },
});
