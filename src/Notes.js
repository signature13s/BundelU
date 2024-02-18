import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';

const Notes = () => {
  return (
    <View className=" flex-1">
      <View className="flex flex-row justify-between px-5 py-2 items-center bg-slate-200 ">
        <Text className="text-primary text-lg text-left ">
          BU<Text className="text-black">NDEL U</Text>
        </Text>

        <Text className=" text-center font-semibold">PYQ & NOTES</Text>
      </View>

      <View className=" bg-white drop-shadow-xl rounded-lg flex-row justify-start mx-5 my-5   ">
        <Image
          source={require('../assets/images/notes.jpeg')}
          resizeMode="contain"
          className=" h-24 w-24 ml-2"
        />

        <View className="flex pl-5 ml-5 ">
          <Text className="my-3  text-black text-lg font-mono">
            Data Structure
          </Text>
          <TouchableOpacity className="bg-primary  px-6 py-2 rounded-lg ">
            <Text className="text-white"> Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
