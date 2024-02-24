import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between flex h-16  bg-white items-center py-1">
      <View className="white flex flex-row items-center">
        <Text className="text-purple-600 text-xl font-Bold">BU</Text>
        <Text className=" text-black text-xl font-Bold">NDEL U</Text>
      </View>

      <TouchableOpacity
        classname="self-center"
        onPress={() => {
          navigation.navigate('Account');
        }}>
        <Image
          className="w-8 h-8 "
          source={require('../../assets/images/bu_logo.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
