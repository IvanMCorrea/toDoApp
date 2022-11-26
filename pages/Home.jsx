import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { containerStyles, textStyles } from "../styles/styles";
import ToDoList from "../components/toDoList";

const Home = () => {
  return (
    <View style={containerStyles.pageContainer}>
      <TouchableOpacity style={containerStyles.buttonGiga}>
        <Text style={textStyles.buttonTextGiga}>New Task</Text>
      </TouchableOpacity>
      <ToDoList />
    </View>
  );
};

export default Home;
