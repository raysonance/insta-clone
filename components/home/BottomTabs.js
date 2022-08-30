import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { useState } from "react";

const BottomTabs = ({ bottomTabIcons, user }) => {
  const [activeTab, setActiveTab] = useState('')

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: icon.name === activeTab ? icon.active : icon.inactive }} style={styles.story} />
    </TouchableOpacity>
  );

  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        {bottomTabIcons.map((button, index) => (
          <View key={index}>
            <Icon icon={button} />
          </View>
        ))}
        <TouchableOpacity onPress={() => setActiveTab(user.user)}>
          <Image
            source={
              user.image
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  story: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: "contain",
  },
});
