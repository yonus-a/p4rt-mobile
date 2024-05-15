import { CLR_WHITE } from "../../../globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  foodCard: {
    backgroundColor: CLR_WHITE,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    gap: 20,
  },
  info: {
    flexDirection: "row",
    gap: 20,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    objectFit: "cover",
  },
  details: {
    flex: 1,
    gap: 10,
  },
  foodName: {
    fontSize: 17,
  },
  shifts: {
    flexDirection: "row",
    gap: 10,
  },
  shift: {
    padding: 8,
    borderRadius: 8,
    flex: 1,
  },
  shiftText: {
    color: CLR_WHITE,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  counter: {
    flex: 1,
  },
  submit: {
    flex: 1.3,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
