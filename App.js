import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/Home';


const App = () => {


  const Stack = createNativeStackNavigator()
  useEffect(()=>{
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name ="Home" component={Home}/>
      </Stack.Navigator>
    <View>
    </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({}) 