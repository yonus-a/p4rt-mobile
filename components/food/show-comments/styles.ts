import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "90%",
  },
  text: {
    fontSize: 13,
    maxWidth: "80%",
  },
  item: {
    padding: 10,
    paddingLeft: 30,
    backgroundColor: "#fcfcfc",
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
    width: 35,
    height: 35,
    objectFit: "cover",
    borderRadius: 1000,
  },
});
