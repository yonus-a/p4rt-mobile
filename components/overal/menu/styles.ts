import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../globalStyles";

export default StyleSheet.create({
  topSection: {
    backgroundColor: "#182858",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 130,
    paddingBottom: 20,
  },
  logo: {
    width: 180,
    height: 100,
    objectFit: "scale-down",
  },
  drawer: {
    backgroundColor: "#182858",
    marginTop: 0,
    paddingTop: 0,
    height: "100%",
    flex: 1,
  },
  container: {
    backgroundColor: CLR_WHITE,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
    elevation: 2,
  },
  wrapper: {
    alignItems: "center",
    marginTop: 50,
    paddingBottom: 5,
  },
  text: {
    color: "#555",
  },
  icon: {
    width: 120,
    height: 22,
    marginVertical: 10,
  },
});
