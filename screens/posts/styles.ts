import { StyleSheet } from "react-native";

export default StyleSheet.create({
  posts: {
    marginBottom: 90,
  },
  flexWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 15,
    columnGap: 10,
  },
  title: {
    fontSize: 17,
    marginBottom: 25,
  },
  navigate: {
    alignItems: "center",
    width: "31.4%",
    gap: 3,
  },
  iconWrapper: {
    borderRadius: 10,
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
  seperator: {
    width: "80%",
    height: 1,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  moreIcon: {
    width: 30,
    height: 30,
  },
});
