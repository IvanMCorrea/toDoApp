import React from "react";
import { Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { textStyles } from "../styles/styles";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
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
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
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
