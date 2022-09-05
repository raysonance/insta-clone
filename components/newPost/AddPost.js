import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const AddPost = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <FormikPostUploader />
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 5,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginLeft: "33%" }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
          NEW POST
        </Text>
      </View>
    </View>
  );
};

export default AddPost;
