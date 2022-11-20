import React from "react";
import { Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { textStyles, containerStyles } from "../styles/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const schema = yup
    .object({
      user: yup.string().required(),
      password: yup.string().required(),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <View>
      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
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
          name="user"
        />
        {errors.user && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={containerStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
        <TouchableOpacity onPress={() => {}}>
          <Text style={textStyles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>
            Don't have an account? <Text style={textStyles.link}> Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
