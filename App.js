import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "./GlobalStyles";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <HomeScreen />
    </SafeAreaView>
  );
}
