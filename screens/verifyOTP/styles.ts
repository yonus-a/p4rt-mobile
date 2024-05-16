import { CLR_WHITE } from "../../styles/globalStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  login: {
    backgroundColor: "#F2F3F7",
    paddingHorizontal: 40,
    paddingVertical: 22,
    flex: 1,
  },
  image: {
    objectFit: "scale-down",
    width: "100%",
    flex: 1,
  },
  flexWrapper: {
    display: "flex",
    gap: 25,
    flex: 1,
  },
  btn: {
    alignSelf: "center",
    width: "40%",
  },
  btnText: {
    color: CLR_WHITE,
    textAlign: "center",
  },
  logo: {
    width: 30,
    objectFit: "scale-down",
  },
  logoWrapper: {
    gap: 10,
    flexBasis: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 11,
  },
  inputWrapper: {
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: CLR_WHITE,
    borderColor: "#000",
    borderRadius: 6,
    elevation: 6,
  },
  text: {
    fontSize: 14,
  },
});
