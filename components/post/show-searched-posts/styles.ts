import { StyleSheet } from "react-native";

export default StyleSheet.create({
  showPosts: {
    margin: 16,
  },
  image: {
    width: 200,
    height: 150,
  },
  empty: {
    textAlign: "center",
    marginTop: 64,
  },
  wrapper: {
    gap: 16,
    marginBottom: 32,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    flexBasis: "100%",
    width: "auto",
  },
  contentContainer: {
    gap: 10,
    paddingBottom: 90,
  },
});
