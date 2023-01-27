import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { containerStyles } from "../styles/styles";

const ToDoTask = ({ task }) => {
  return (
    <View style={containerStyles.componentContainer}>
      <TouchableOpacity style={[containerStyles.task, { marginBottom: 20 }]}>
        <Text>
          {task.title}: {task.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoTask;
