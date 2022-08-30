import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5"

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require("../../assets/add-post.png")}
            tintColor={"white"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 14, marginTop: 2 }}>
          <Icon name="heart" size={25} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 2 }}>
          <View style={styles.unreadbadge}>
            <Text style={styles.unreadbadgetext}>11</Text>
          </View>
          <Icon name="facebook-messenger" size={25} color="#fff" />
        </TouchableOpacity>
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
    width: 25,
    height: 30,
    marginRight: 14,
    resizeMode: "contain",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  unreadbadge: {
    zIndex: 100,
    width: 25,
    height: 18,
    position: "absolute",
    alignItems: "center",
    backgroundColor: "#FF3250",
    borderRadius: 25,
    justifyContent: 'center',
    left: 9,
    bottom: 17
  },

  unreadbadgetext: {
    color: "white",
    fontWeight: '700',
  },
});
