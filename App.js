import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/Home';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/Onboarding';

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);
  return (
    <View className="bg-primaryLight flex-1">
      <Text className="text-red-400 text-4xl font-Bold ">App</Text>
    </View>
  );
};

export default App

const styles = StyleSheet.create({}) 