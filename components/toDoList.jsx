import { View, Text, ScrollView } from "react-native";
import React from "react";
import { containerStyles } from "../styles/styles";

const ToDoList = () => {
  return (
    <ScrollView style={containerStyles.componentContainer}>
      <Text>toDoList</Text>
    </ScrollView>
  );
};

export default ToDoList;
