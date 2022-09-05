import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

const LoginInput = () => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <TextInput
        placeholder="Phone number, username or email "
        placeholderTextColor="gray"
        style={{
          alignSelf: "flex-start",
          color: "white",
          fontSize: 13,
          borderWidth: 1,
          paddingHorizontal: 5,
          borderRadius: 3,
          paddingVertical: 3,
          borderColor: "grey",
          width: Dimensions.get("window").width * 0.95,
        }}
      />
      <TextInput
        placeholder="Password "
        placeholderTextColor="gray"
        style={{
          alignSelf: "flex-start",
          color: "white",
          fontSize: 13,
          borderWidth: 1,
          paddingHorizontal: 5,
          paddingVertical: 3, 
          backgroundColor:'#FAFAFA',
          borderRadius: 3,
          marginVertical: 10,
          width: Dimensions.get("window").width * 0.95,
        }}
      />
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ color: "#6BB0F5", fontWeight: "700" }}>
          Forgot Password?
        </Text>
      </View>
    </View>
  );
};

export default LoginInput;
