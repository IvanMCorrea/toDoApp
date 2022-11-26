import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { containerStyles, textStyles } from "../styles/styles";

const Home = () => {
  return (
    <View style={containerStyles.pageContainer}>
      <TouchableOpacity style={containerStyles.buttonGiga}>
        <Text style={textStyles.buttonTextGiga}>New Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
