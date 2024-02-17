import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

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

export default App;

const styles = StyleSheet.create({});
