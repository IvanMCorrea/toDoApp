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
    color: "white",
  },
  errorMsg: {
    color: "red",
  },
});

const containerStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  button: {
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "blue",
    width: 125,
    alignItems: "center",
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
