import { StyleSheet } from "react-native";

export default StyleSheet.create({
  postComment: {
    marginTop: 30,
    flex: 1,
  },
  text: {
    flex: 1,
    textAlign: "right",
  },
  item: {
    padding: 16,
    paddingLeft: 30,
    width: "100%",
    backgroundColor: "#fcfcfc",
    justifyContent: "flex-end",
    borderColor: "#BFBFBF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 13,
    borderWidth: 0.5,
    gap: 15,
  },
  image: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: 1000,
  },
  group: {
    flex: 0.4,
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    overflow: "hidden",
    width: 80,
  },
  hiddenItem: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
  },
});
