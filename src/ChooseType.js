import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ChooseType = ({navigation}) => {
  return (
    <View className="flex flex-1 bg-white justify-center  px-8">
      <TouchableOpacity
        className="bg-primary  px-6 py-4 my-3 "
        onPress={() => {
          navigation.navigate('AdminLogin');
        }}>
        <Text className="text-white font-Bold text-center">
          Continue as Admin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-primary  px-6 py-4  my-3 "
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text className="text-white font-Bold text-center">
          Continue as Student
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseType;

const styles = StyleSheet.create({});
