import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Story from "../components/home/Story";
import Post from "../components/home/Post";
import BottomTabs from "../components/home/BottomTabs";
import { POSTS } from "../data/products";
import { bottomTabIcons } from "../data/bottomTabIcons";
import { USERS } from "../data/users";
import GlobalStyles from "../GlobalStyles";
import Product from "../components/home/Product";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const { products } = useSelector((state) => state.ProductReducers);
  return (
    <View style={GlobalStyles.AndroidSafeArea}>
      <Header navigation={navigation} />
      <Story />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {products.map((item, index) => (
          <Product
            pfp={item.pfp}
            user={item.user}
            imageUrl={item.image}
            likes={item.price}
            comment={item.comments}
            key={index}
            caption={item.name}
          />
        ))}
      </ScrollView>
      <BottomTabs bottomTabIcons={bottomTabIcons} user={USERS[0]} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
