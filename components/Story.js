import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { USERS } from "../data/users";

const Story = () => {
  return (
    <View style={{marginBottom: 10}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((item, index) => (
          <TouchableOpacity key={index}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 6,
              }}
            >
              <Image source={item.image} style={styles.story} />
              <Text style={{ color: "white", fontSize: 12 }}>
                {item.user.length > 11
                  ? item.user.slice(0, 10).toLowerCase() + "..."
                  : item.user.toLowerCase()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff8501",
    resizeMode: "contain",
  },
});
