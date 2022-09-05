import { View, Text } from "react-native";
import React from "react";
import AddPost from "../components/newPost/AddPost";
import GlobalStyles from "../GlobalStyles";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={GlobalStyles.AndroidSafeArea}>
      <View style={{ marginTop: 5 }}>
        <AddPost navigation={navigation} />
      </View>
    </View>
  );
};

export default AddNewPost;
