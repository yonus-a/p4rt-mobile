import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    borderRadius: 16,
    width: 80,
    height: 80,
  },
  actions: {},
  renderFoods: {
    justifyContent: "space-between",
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 20,
  },
});
