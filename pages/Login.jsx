import React from "react";
import {
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { textStyles, containerStyles } from "../styles/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-native";
import routes from "../router/routes";

const Login = () => {
  const navigate = useNavigate();
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
  const onSubmit = () => navigate(routes.home);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={containerStyles.pageContainer}>
          <Text style={[{ margin: 15 }, textStyles.appTitle]}>toDoApp</Text>
          <View
            style={{
              borderColor: "#555555",
              borderWidth: 2,
              borderRadius: 10,
              padding: 15,
            }}
          >
            <FontAwesomeIcon icon={faListCheck} size={100} color="#555555" />
          </View>
        </View>
        <View
          style={{ marginTop: 30, marginHorizontal: 20, alignItems: "center" }}
        >
          <Text>User</Text>
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
          {errors.user && (
            <Text style={[textStyles.errorMsg, { marginBottom: 10 }]}>
              This field is required.
            </Text>
          )}
          <Text>Password</Text>
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
          {errors.password && (
            <Text style={[textStyles.errorMsg, { marginBottom: 10 }]}>
              This field is required.
            </Text>
          )}
          <TouchableOpacity onPress={() => {}} style={{ marginTop: 10 }}>
            <Text style={textStyles.link}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[{ marginTop: 20 }, containerStyles.buttonPrimary]}
          >
            <Text style={textStyles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ marginTop: 20 }}>
            <Text>
              Don't have an account?{" "}
              <Text style={textStyles.link}> Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
