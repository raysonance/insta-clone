import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements/dist/divider/Divider";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(
    "2200",
    "The caption has reached the max character limit."
  ),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnail] = useState();

  return (
    <Formik
      initialValues={{ caption: "" }}
      onSubmit={(values) => {
        uploadPost(values.caption);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
            <View style={{ flexDirection: "row", marginBottom: 25 }}>
              <Image
                source={require("../../assets/stories/5.jpg")}
                // source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG  }}
                style={styles.story}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <TextInput
                  placeholder="Write a caption..."
                  placeholderTextColor="gray"
                  multiline={true}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                  style={{
                    alignSelf: "flex-start",
                    color: "white",
                    fontSize: 13
                  }}
                />
              </View>
            </View>

            <Divider width={1} orientation="vertical" />
            <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
              <TextInput
                multiline={true}
                onChange={(e) => setThumbnail(e.nativeEvent.text)}
                onChangeText={handleChange("imageUrl")}
                onBlur={handleBlur("imageUrl")}
                value={values.imageUrl}
                placeholder="Enter Image URL"
                placeholderTextColor="gray"
                style={{ color: "white" }}
              />
              {errors.imageUrl && (
                <Text style={{ color: "red", fontSize: 10 }}>
                  {errors.imageUrl}
                </Text>
              )}
            </View>
            <View style={{ alignItems: "center", paddingVertical: 5 }}>
              <TouchableOpacity>
                <Text style={{ color: "blue", fontSize: 17 }}> Share </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
const styles = StyleSheet.create({
  story: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "#ff8501",
    resizeMode: "contain",
  },
});
