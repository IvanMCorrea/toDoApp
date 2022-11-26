import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { containerStyles } from "../styles/styles";

const ToDoTask = () => {
  return (
    <View style={containerStyles.componentContainer}>
      <TouchableOpacity style={containerStyles.task}>
        <Text>ToDoTaskTitle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoTask;
