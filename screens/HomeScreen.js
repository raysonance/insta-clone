import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Story from "../components/home/Story";
import Post from "../components/home/Post";
import BottomTabs from "../components/home/BottomTabs";
import { POSTS } from "../data/posts";
import { bottomTabIcons } from "../data/bottomTabIcons";
import { USERS } from "../data/users";
import GlobalStyles from "../GlobalStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.AndroidSafeArea}>
      <Header navigation={navigation} />
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
      <BottomTabs bottomTabIcons={bottomTabIcons} user={USERS[0]} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
