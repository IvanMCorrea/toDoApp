import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { containerStyles, textStyles } from "../styles/styles";
import ToDoTask from "./ToDoTask";

const ToDoList = ({ tasks }) => {
  return (
    <View style={[containerStyles.componentContainer]}>
      <Text style={textStyles.title}>To Do List</Text>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
          paddingBottom: 50,
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
