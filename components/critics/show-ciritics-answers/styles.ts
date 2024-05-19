import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../styles/globalStyles";

export default StyleSheet.create({
  seperator: {
    backgroundColor: "#ccc",
    width: "100%",
    height: 1,
  },
  wrapper: {
    gap: 20,
    marginBottom: 90,
    marginTop: 30,
  },
  item: {
    gap: 10,
    backgroundColor: CLR_WHITE,
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  sender: {
    fontSize: 12,
  },
});


