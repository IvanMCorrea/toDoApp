import { View, Text, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import { containerStyles } from "../styles/styles";
import Checkbox from "expo-checkbox";
import { stylesCheckbox } from "../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deleteItemByPosition } from "../api/storage";

const ToDoTask = ({ task, index, loadData }) => {
  const [isChecked, setIsChecked] = useState(false);
  const deleteItem = async () => {
    await deleteItemByPosition(index);
    loadData();
  };
  return (
    <View
      style={[containerStyles.componentContainer, { flexDirection: "row" }]}
    >
      <TouchableOpacity
        style={[
          containerStyles.task,
          {
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
        onPress={() => setIsChecked(!isChecked)}
      >
        <>
          <Checkbox
            style={[stylesCheckbox.checkbox]}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "#7BDBBE" : undefined}
          />
          <Text
            style={[
              { fontWeight: "500" },
              isChecked && { textDecorationLine: "line-through" },
            ]}
          >
            {task.title}:{" "}
          </Text>
          <Text style={[isChecked && { textDecorationLine: "line-through" }]}>
            {task.description}
          </Text>
        </>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteItem}>
        <FontAwesomeIcon
          icon={faTrashCan}
          size={24}
          color="#555555"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ToDoTask;
