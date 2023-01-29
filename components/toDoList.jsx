import { View, Text, ScrollView } from "react-native";
import React from "react";
import { containerStyles, textStyles } from "../styles/styles";
import ToDoTask from "./ToDoTask";

const ToDoList = ({ tasks, loadData }) => {
  return (
    <View style={[containerStyles.componentContainer]}>
      <Text style={textStyles.title}>To Do List</Text>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 50,
        }}
      >
        {tasks && tasks[0]
          ? tasks.map((task, index) => (
              <ToDoTask
                task={task}
                index={index}
                key={index}
                loadData={loadData}
              />
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default ToDoList;
