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
            style={[containerStyles.modalView, { width: 320, height: 280 }]}
          >
            <Text style={[{ margin: 40 }, textStyles.title]}>
              Add new To Do
            </Text>
            <TextInput
              style={[containerStyles.input, { marginBottom: 40 }]}
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
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={containerStyles.buttonSecondary}
              >
                <Text>BACK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={containerStyles.buttonPrimary}
              >
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
