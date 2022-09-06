import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Image } from "react-native";
import LoginForm from "../components/account/LoginForm";
const INSTAGRAM_LOGO =
  "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";

const LoginScreen = () => {
  return (
    <View style={GlobalStyles.AndroidSafeAreaWhite}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
      </View>
      <LoginForm />
    </View>
  );
};
const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    resizeMode: "cover",
  },
});

export default LoginScreen;
