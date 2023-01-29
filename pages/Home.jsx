import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { containerStyles, textStyles } from "../styles/styles";
import ToDoList from "../components/ToDoList";
import NewToDoModal from "../components/NewToDoModal";
import { deleteData, getData } from "../api/storage";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    const storage = await getData("TO_DO_LIST");
    setTasks(storage);
    setIsLoading(false);
  };

  const deleteTasks = async () => {
    deleteData("TO_DO_LIST");
    loadData();
  };
  return (
    <ScrollView>
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
        {!isLoading && tasks && tasks[0] && (
          <ToDoList tasks={tasks} loadData={loadData} />
        )}
        <NewToDoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          loadData={loadData}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
