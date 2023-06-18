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
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import { Divider } from "react-native-elements/dist/divider/Divider";
import validUrl from "valid-url";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string("Fetch from the web"),
  caption: Yup.string()
    .required()
    .max("2200", "The caption has reached the max character limit."),
  price: Yup.string().required().max("6", "The price has reached max limit."),
});

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnail] = useState();
  const [selectedImage, setSelectedImage] = useState();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    } else {
      alert("You did not select any Image");
    }
  };
  const dispatch = useDispatch();
  const uploadPost = (caption, url, price) => {
    const uri = url ? url : selectedImage;

    if (uri) {
      addProduct(caption, uri, price, dispatch);
      navigation.goBack();
    } else {
      alert("image required");
    }
  };

  const uri = {
    uri: thumbnailUrl,
  };

  return (
    <Formik
      initialValues={{ caption: "" }}
      onSubmit={(values) => {
        uploadPost(values.caption, values.imageUrl, values.price);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
        <>
          <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
            <View style={{ flexDirection: "row", marginBottom: 25 }}>
              <Image
                // source={require("../../assets/stories/5.jpg")}
                source={
                  validUrl.isUri(thumbnailUrl)
                    ? uri
                    : selectedImage
                    ? { uri: selectedImage }
                    : null
                }
                style={styles.story}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <TextInput
                  placeholder="Write the name of the product..."
                  placeholderTextColor="gray"
                  multiline={true}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                  style={{
                    alignSelf: "flex-start",
                    color: "white",
                    fontSize: 13,
                    borderBottomWidth: 1,
                    borderBottomColor: "white",
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
                style={{
                  color: "white",
                  borderBottomWidth: 1,
                  borderBottomColor: "white",
                }}
              />
              {errors.imageUrl && (
                <Text style={{ color: "red", fontSize: 10, marginTop: 3 }}>
                  {errors.imageUrl}
                </Text>
              )}
            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
              <Button
                title={"Pick Image From Device"}
                onPress={pickImageAsync}
              />
            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
              <TextInput
                multiline={true}
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                value={values.price}
                placeholder="Price..."
                placeholderTextColor="gray"
                style={{
                  color: "white",
                  borderBottomWidth: 1,
                  borderBottomColor: "white",
                }}
              />
              {errors.price && (
                <Text style={{ color: "red", fontSize: 10, marginTop: 3 }}>
                  {errors.price}
                </Text>
              )}
            </View>
            <View style={{ alignItems: "center", paddingVertical: 5 }}>
              <TouchableOpacity onPress={handleSubmit}>
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
