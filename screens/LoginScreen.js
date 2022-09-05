import { View, Text } from 'react-native'
import React from 'react'
import LoginInput from '../components/account/LoginInput';
import GlobalStyles from '../GlobalStyles';

const LoginScreen = () => {
  return (
    <View style={GlobalStyles.AndroidSafeAreaWhite}>
      <View>
        <LoginInput />
      </View>
    </View>
  );
}

export default LoginScreen