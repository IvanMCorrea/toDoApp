import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { containerStyles, textStyles } from "../styles/styles";
import ToDoList from "../components/ToDoList";
import NewToDoModal from "../components/NewToDoModal";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={containerStyles.pageContainer}>
      <TouchableOpacity
        style={containerStyles.buttonGiga}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={textStyles.buttonTextGiga}>New Task</Text>
      </TouchableOpacity>
      <ToDoList />
      <NewToDoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default Home;
