import { View, Text, ScrollView } from "react-native";
import React from "react";
import { containerStyles, textStyles } from "../styles/styles";
import ToDoTask from "./ToDoTask";

const ToDoList = () => {
  return (
    <ScrollView>
      <View style={containerStyles.componentContainer}>
        <Text style={textStyles.title}>To Do List</Text>
        <ToDoTask />
      </View>
    </ScrollView>
  );
};

export default ToDoList;
