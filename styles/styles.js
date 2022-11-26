import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const textStyles = StyleSheet.create({
  appTitle: {
    fontSize: "28px",
    fontStyle: "italic",
  },
  link: {
    color: "blue",
  },
  buttonText: {
    fontWeight: "500",
    letterSpacing: "1.2",
    color: "#404040",
  },
  buttonTextGiga: {
    fontSize: "32px",
    fontWeight: "400",
    letterSpacing: "1.2",
    color: "#404040",
  },
  errorMsg: {
    color: "red",
  },
});

const containerStyles = StyleSheet.create({
  pageContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  buttonPrimary: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#7BDBBE",
    width: 125,
    alignItems: "center",
  },
  buttonGiga: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#7BDBBE",
    width: 250,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    marginTop: Constants.statusBarHeight,
    width: "100%",
    height: "100%",
  },
});

const imgStyles = StyleSheet.create({
  logo: {
    borderColor: "#555555",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
  },
});
export { textStyles, containerStyles, imgStyles };
