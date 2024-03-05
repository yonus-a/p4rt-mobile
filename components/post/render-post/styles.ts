import { StyleSheet } from "react-native";

export default StyleSheet.create({
  renderPost: {
    alignItems: "flex-end",
    flex: 1,
  },
  mainImage: {
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
  info: {
    marginTop: 16,
    marginBottom: 32,
  },
  content: {
    marginBottom: 20,
  },
});
