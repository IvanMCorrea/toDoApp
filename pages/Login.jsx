import React from 'react'
import { Text, TextInput, View } from 'react-native'

const Login = () => {
  return (
    <View>
        <Text>Login</Text>
        <Text>Username or email</Text>
        <TextInput />
        <Text>Password</Text>
        <TextInput />
    </View>
  )
}

export default Login