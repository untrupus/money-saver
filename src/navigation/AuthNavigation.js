import React from 'react';
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen/ResetPasswordScreen";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      ...TransitionPresets.RevealFromBottomAndroid
    }}>
      <Stack.Screen name='Welcome' component={WelcomeScreen}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{gestureDirection: 'horizontal'}}/>
      <Stack.Screen name='Register' component={RegisterScreen} options={{gestureDirection: 'horizontal'}}/>
      <Stack.Screen name='Reset Password' component={ResetPasswordScreen} options={{gestureDirection: 'horizontal'}}/>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
