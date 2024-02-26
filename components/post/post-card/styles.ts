import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: 157,
    backgroundColor: CLR_WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderRadius: 10,
    elevation: 8,
    flex: 1,
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
    fontSize: 16,
  },
  desc: {
    fontSize: 11,
  },
});
