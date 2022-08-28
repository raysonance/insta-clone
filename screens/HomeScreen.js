import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Story from "../components/Story";
import Post from "../components/Post";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Story />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {POSTS.map((item, index) => (
          <Post
            pfp={item.pfp}
            user={item.user}
            imageUrl={item.imageUrl}
            likes={item.likes}
            comment={item.comments}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
