import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Login';
import Home from './src/Home';

const App = () => {
  
  const Stack = createNativeStackNavigator();
   
   
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  }
export default App;

const styles = StyleSheet.create({});
