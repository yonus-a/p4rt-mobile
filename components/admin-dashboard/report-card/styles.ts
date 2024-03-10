import { StyleSheet } from "react-native";

export default StyleSheet.create({
  reportCard: {
    padding: 20,
    borderRadius: 16,
    width: "30%",
    elevation: 6,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20,
  },
  desc: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 16,
  },
  amount: {
    borderRadius: 16,
    marginTop: 16,
    fontSize: 16,
    padding: 16,
    minWidth: 50,
    textAlign: "center",
  },
  image: {
    objectFit: "cover",
  },
});
