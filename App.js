import { View, Text, SafeAreaView, Dimensions } from "react-native";
import GlobalStyles from "./GlobalStyles";
import SignedInStack from "./navigation";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

export default function App() {
  const store = configureStore();

  return (
    <ReduxProvider store={store}>
      <SignedInStack />
    </ReduxProvider>
  );
}
