import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";


const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    likedImageUrl: "https://img.icons8.com/ios-glyphs/90/fa314a/like--v1.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/60/ffffff/filled-topic.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/sent.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png",
  },
];

const Post = ({ pfp, user, imageUrl, likes, comment }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader pfp={pfp} user={user} />
      <PostImage imageUrl={imageUrl} />
      <PostFooter likes={likes} comment={comment} />
    </View>
  );
};

export default Post;

const PostHeader = ({ pfp, user }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image style={styles.story} source={pfp} />
      <Text style={{ color: "white", fontSize: 14, marginLeft: 5 }}>
        {user}
      </Text>
    </View>
    <TouchableOpacity style={{ paddingBottom: 10 }}>
      <Text style={{ color: "white", fontSize: 25, fontWeight: "900" }}>
        ...
      </Text>
    </TouchableOpacity>
  </View>
);

const PostImage = ({ imageUrl }) => (
  <View style={{ alignItems: "center", justifyContent: "center", height: 450 }}>
    <Image style={styles.postImage} source={imageUrl} />
  </View>
);

const PostFooter = ({ likes, comment }) => (
  <View style={{ marginHorizontal: 10 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Image
          source={{ uri: postFooterIcons[0].imageUrl }}
          style={styles.footerIcons}
        />
        <Image
          source={{ uri: postFooterIcons[1].imageUrl }}
          style={styles.footerIcons}
        />
        <Image
          source={{ uri: postFooterIcons[2].imageUrl }}
          style={styles.footerIcons}
        />
      </View>
      <Image
        source={{ uri: postFooterIcons[3].imageUrl }}
        style={{ width: 25, height: 25 }}
      />
    </View>
    <Text style={{ color: "white", fontWeight: "700" }}>{likes} likes</Text>
    <Comment comment={comment} />
  </View>
);

const Comment = ({ comment }) => (
  <View style={{ marginTop: 5 }}>
    {comment.length && (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 13 }}>
          {comment[0].user}{" "}
        </Text>
        <Text style={{ color: "white", fontWeight: "500", fontSize: 13 }}>
          {comment[0].comment}
        </Text>
      </View>
    )}
    {comment.length > 1 ? (
      <Text style={{ color: "grey" }}>View all {comment.length} comments </Text>
    ) : (
      pass
    )}
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
  postImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  footerIcons: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
});
