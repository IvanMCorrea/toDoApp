import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { containerStyles, textStyles } from "../styles/styles";
import ToDoTask from "./ToDoTask";

const ToDoList = ({ tasks }) => {
  const [height, setHeight] = useState();
  return (
    <View style={[containerStyles.componentContainer]}>
      <Text style={textStyles.title}>To Do List</Text>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 50,
          height: height,
        }}
      >
        {tasks && tasks[0]
          ? tasks.map((task, index) => <ToDoTask task={task} key={index} />)
          : null}
      </ScrollView>
    </View>
  );
};

export default ToDoList;
