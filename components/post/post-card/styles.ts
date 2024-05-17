import { CLR_WHITE } from "../../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    // height: 260,
    backgroundColor: CLR_WHITE,
    elevation: 3,
    borderRadius: 10,
    overflow: "hidden",
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
    height: 40,
  },
});
