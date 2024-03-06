import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profile: {
    flexDirection: "row",
    borderRadius: 1000,
    backgroundColor: "rgba(224, 224, 224, .3)",
    overflow: "hidden",
    gap: 10,
    zIndex: 99,
  },
  image: {
    width: 40,
    height: 40,
  },
  drawer: {
    alignItems: "center",
    flexDirection: "row",
  },
});
