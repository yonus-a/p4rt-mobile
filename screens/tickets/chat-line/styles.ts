import { StyleSheet } from "react-native";
import { CLR_WHITE } from "../../../styles/globalStyles";

export default StyleSheet.create({
  chatLine: {
    flex: 1,
  },
  attachment: {},
  line: {
    backgroundColor: CLR_WHITE,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    elevation: 3,
    padding: 16,
    gap: 10,
  },
});
