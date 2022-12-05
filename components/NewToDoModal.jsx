import React from "react";
import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { containerStyles, textStyles } from "../styles/styles";

const NewToDoModal = ({ setModalVisible, modalVisible }) => {
  return (
    <View style={containerStyles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={[
            containerStyles.centeredView,
            { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          ]}
        >
          <View
            style={[containerStyles.modalView, { width: 280, height: 250 }]}
          >
            <Text style={[{ margin: 20 }, textStyles.title]}>
              Add new To Do
            </Text>
            <TextInput
              style={containerStyles.input}
              /* onChangeText={(value) => onChange(value)} */
              /* value={value} */
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>BACK</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewToDoModal;
