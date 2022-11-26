import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter } from "react-router-native";
import AppRouter from "./router/AppRouter";
import { containerStyles } from "./styles/styles";

export default function App() {
  return (
    <NativeRouter>
      <StatusBar style="auto" />
      <View style={containerStyles.layout}>
        <AppRouter />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
