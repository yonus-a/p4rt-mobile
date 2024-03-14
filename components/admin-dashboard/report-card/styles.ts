import { StyleSheet } from "react-native";

export default StyleSheet.create({
  reportCard: {
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 16,
    width: 130,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20,
  },
  desc: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 16,
  },
  amount: {
    borderRadius: 8,
    marginTop: 16,
    fontSize: 15,
    padding: 8,
    paddingVertical: 4,
    minWidth: 30,
    textAlign: "center",
  },
  image: {
    objectFit: "cover",
  },
});
