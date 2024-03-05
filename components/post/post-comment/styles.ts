import { StyleSheet } from "react-native";

export default StyleSheet.create({
  postComment: {
    flex: 1,
    gap: 10,
    marginTop: 30,
  },
  text: {
    flex: 1,
    textAlign: "right",
    fontSize: 16,
  },
  item: {
    padding: 16,
    paddingLeft: 30,
    width: "100%",
    backgroundColor: "#efefef",
    flexDirection: "row",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "flex-end",
    borderColor: "#BFBFBF",
    shadowColor: "#999",
    borderWidth: 0.5,
    elevation: 10,
    gap: 15,
  },
  image: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: 1000,
  },
  group: {
    flex: 0.5,
    alignItems: "center",
  },
});
