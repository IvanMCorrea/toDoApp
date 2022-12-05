import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { containerStyles } from "../styles/styles";

const ToDoTask = () => {
  const tasks = [
    { title: "My Task", description: "description" },
    { title: "My Task", description: "description" },
    { title: "My Task", description: "description" },
    { title: "My Task", description: "description" },
    { title: "My Task", description: "description" },
  ];
  return (
    <View style={containerStyles.componentContainer}>
      {tasks
        ? tasks.map((task, index) => (
            <TouchableOpacity
              style={[containerStyles.task, { marginBottom: 20 }]}
              key={index}
            >
              <Text>
                {task.title}: {task.description}
              </Text>
            </TouchableOpacity>
          ))
        : null}
    </View>
  );
};

export default ToDoTask;
