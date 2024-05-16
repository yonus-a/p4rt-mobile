import { CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: " 100%",
    height: 330,
    padding: 5,
  },
  card: {
    width: 157,
    height: 290,
    backgroundColor: CLR_WHITE,
    shadowColor: "#000",
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderRadius: 10,
    elevation: 8,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: 161,
  },
  body: {
    padding: 10,
    gap: 10,
  },
  empty: {
    textAlign: "center",
    marginTop: 64,
  },
  title: {
    fontSize: 15,
  },
  desc: {
    fontSize: 11,
  },
});
