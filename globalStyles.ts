import { StyleSheet } from "react-native";

export const CLR_PRIMARY = "#0093FF";
export const CLR_WHITE = "#ffffff";
export const CLR_BACKDROP = "rgba(0, 0, 0, 0.23)";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: 24,
    marginVertical: 10,
    fontFamily: "IRANSans",
  },
  h2: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "IRANSans",
  },
});
