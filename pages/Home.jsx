import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { containerStyles, textStyles } from "../styles/styles";
import ToDoList from "../components/ToDoList";
import NewToDoModal from "../components/NewToDoModal";
import { deleteData, getData } from "../api/storage";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    loadData();
  }, [newTask]);

  const loadData = async () => {
    const storage = await getData("TO_DO_LIST");
    setTasks(storage);
  };

  const deleteTasks = async () => {
    deleteData("TO_DO_LIST");
  };
  return (
    <View style={containerStyles.pageContainer}>
      <TouchableOpacity
        style={containerStyles.buttonGiga}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={textStyles.buttonTextGiga}>New Task</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[containerStyles.buttonSecondary, { marginVertical: 10 }]}
        onPress={() => deleteTasks()}
      >
        <Text style={textStyles.buttonText}>Delete Tasks</Text>
      </TouchableOpacity>
      {tasks && tasks[0] && <ToDoList tasks={tasks} />}
      <NewToDoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setNewTask={setNewTask}
        newTask={newTask}
      />
    </View>
  );
};

export default Home;
