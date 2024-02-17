import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Register = () => {
  return (
    <View className="flex justify-center ">
      <Image
        source={require('../assets/image/bu_logo.png')}
        className="w-24 h-24 mx-auto mt-10"
        resizeMode="contain"
      />
      <Text className=" text-xl text-center font-Bold text-purple-600 m-4  mt-3">
        BUNDELU
      </Text>
      <TextInput
        className="border-2 px-3  rounded-lg m-3 my-4 mx-8 border-[#c4c5c7] font-Regular text-md "
        placeholder="Enter your Email "
      />
      <TextInput
        className="border-2 px-3 rounded-lg m-3 mx-8 border-[#c4c5c7] font-Regular text-md"
        placeholder="Enter your phone number "
      />
      <TextInput
        className="border-2 px-3  rounded-lg m-3 mx-8 border-[#c4c5c7] font-Regular text-mg"
        placeholder="Enter your password "
      />
      <TouchableOpacity
        onPress={() => {
          console.log('the');
        }}
        className="m-6 rounded-lg py-2  mx-8 flex flex-row justify-evenly bg-purple-500 ">
        <Text className="text-md text-center self-center text-white py-2">
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text className="text-gray text-lg text-center  m-3 ">
        --------------or continue with-------------
      </Text>
      <TouchableOpacity
        onPress={() => {
          console.log('the');
        }}
        className="rounded-lg  m-4 px-2 py-2 border-2 mx-8 flex flex-row justify-evenly border-[#c4c5c7] ">
        <Image
          className="h-8 w-8"
          source={require('./../assets/image/google_logo.png')}
        />
        <Text className="text-lg text-center self-center ">
          Sign in with google
        </Text>
      </TouchableOpacity>
      <View className="flex flex-row justify-center items-center space-x-2">
        <Text className="text-gray text-lg text-center ">
          Already have an account?
        </Text>
        <Text className="underline text-purple-500 text-lg">Login</Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
