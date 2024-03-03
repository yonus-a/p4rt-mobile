import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "90%",
  },
  text: {
    fontSize: 16,
    maxWidth: "80%",
  },
  item: {
    padding: 16,
    paddingLeft: 30,
    backgroundColor: "#e1e1e1",
    flexDirection: "row",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "flex-end",
    borderColor: "#BFBFBF",
    shadowColor: "#999",
    borderWidth: 0.5,
    elevation: 3,
    gap: 20,
  },
  image: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: 1000,
  },
});
