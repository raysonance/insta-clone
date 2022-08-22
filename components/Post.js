import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Post = () => {
  return (
    <View>
      <PostHeader
        image={require("../assets/stories/3.jpg")}
        user={"animegeek"}
      />
    </View>
  );
};

export default Post;

const PostHeader = ({ image, user }) => (
  <View style={{ flexDirection: "row" }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 6,
      }}
    >
      <Image style={styles.story} source={image} />
      <Text style={{ color: "white", fontSize: 12}}>
        {user}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff8501",
    resizeMode: "contain",
  },
});
