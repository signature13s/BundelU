import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Splash from './src/Splash';
import Login from './src/Login';
import Register from './src/Register';
import Onboarding from './src/Onboarding';
import Forgot from './src/Forgot';

const App = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Forgot" component={Forgot} />
      </Stack.Navigator>
      <View></View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
