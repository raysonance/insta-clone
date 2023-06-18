import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddNewPost from "./screens/AddNewPost";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

//authData: { isSignout: boolean, isLoading: boolean }

const MainNavigator = () => {
  return (
    <ErrorBoundary name="AuthProvider">
      <React.Suspense fallback={<SplashScreen />}>
        <AuthProvider>
          {(authData) => {
            if (authData.isLoading) {
              return <SplashScreen />;
            }

            if (authData.isSignout) {
              return (
                <React.Suspense fallback={<SplashScreen />}>
                  <SignInScreen />
                </React.Suspense>
              );
            }

            return (
              <NavigationContainer>
                <MainNavigator />
              </NavigationContainer>
            );
          }}
        </AuthProvider>
      </React.Suspense>
    </ErrorBoundary>
  );
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddNewPost" component={AddNewPost} />
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
