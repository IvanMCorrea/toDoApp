import React from "react";
import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { containerStyles, textStyles } from "../styles/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { storeData } from "../api/storage";

const NewToDoModal = ({
  setModalVisible,
  modalVisible,
  setNewTask,
  newTask,
}) => {
  const schema = yup
    .object({
      title: yup.string().required("Need to add a title"),
      description: yup.string().required("Need to add a description"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (values) => {
    storeData("TO_DO_LIST", values);
    setModalVisible(false);
    setNewTask(!newTask);
  };
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
            style={[
              containerStyles.modalView,
              { width: 320, paddingBottom: 40 },
            ]}
          >
            <Text style={[{ margin: 40 }, textStyles.title]}>
              Add new To Do
            </Text>
            <Text>Title</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={containerStyles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="title"
            />
            {errors.title && (
              <Text style={[textStyles.errorMsg, { marginBottom: 10 }]}>
                {errors.title.message}
              </Text>
            )}
            <Text>Description</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={containerStyles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="description"
            />
            {errors.description && (
              <Text style={[textStyles.errorMsg, { marginBottom: 10 }]}>
                {errors.description.message}
              </Text>
            )}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                marginTop: 15,
              }}
            >
              <TouchableOpacity
                onPress={
                  () => setModalVisible(false) /* deleteData("TO_DO_LIST") */
                }
                style={containerStyles.buttonSecondary}
              >
                <Text>BACK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit(handleForm)}
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
