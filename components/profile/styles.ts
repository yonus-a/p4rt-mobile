import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profile: {
    flexDirection: "row",
    borderRadius: 1000,
    backgroundColor: "rgba(224, 224, 224, .3)",
    overflow: "hidden",
    zIndex: 99,
    gap: 10,
    padding: 3,
  },
  image: {
    width: 46,
    height: 46,
    objectFit: "cover",
    borderRadius: 1000,
  },
  drawer: {
    alignItems: "center",
    flexDirection: "row",
  },
});
