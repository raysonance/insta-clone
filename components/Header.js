import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Text style={styles.icons}>Dummy</Text>
        <Text style={styles.icons}>Dummy</Text>
        <Text style={styles.icons}>Dummy</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  
  iconContainer: {
    flexDirection: "row",
  },

  icons: {
    width: 30,
    color: "white",
    marginRight: 5,
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
