import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const textStyles = StyleSheet.create({
  appTitle: {
    fontSize: 28,
    fontStyle: "italic",
  },
  title: {
    fontSize: 18,
  },
  link: {
    color: "blue",
  },
  buttonText: {
    fontWeight: "500",
    letterSpacing: 1.2,
    color: "#404040",
  },
  buttonTextGiga: {
    fontSize: 32,
    fontWeight: "400",
    letterSpacing: 1.2,
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
  componentContainer: {
    alignItems: "center",
    marginTop: 30,
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
  buttonSecondary: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FF5851",
    width: 125,
    alignItems: "center",
  },
  buttonGiga: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#7BDBBE",
    width: 300,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  task: {
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    width: 300,
    height: 80,
    padding: 10,
  },
  layout: {
    marginTop: Constants.statusBarHeight,
    width: "100%",
    height: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

const stylesCheckbox = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
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
export { textStyles, containerStyles, imgStyles, stylesCheckbox };
