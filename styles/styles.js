import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const textStyles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

const containerStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});
export { textStyles, containerStyles };
