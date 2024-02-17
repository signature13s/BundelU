import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Register = ({navigation}) => {
  return (
    <ScrollView>
      <View className="flex justify-around flex-1">
        <Image
          source={require('../assets/images/bu_logo.png')}
          className="w-24 h-24 mx-auto mt-10"
          resizeMode="contain"
        />
        <Text className=" text-3xl text-center font-Bold text-primary m-4  mt-3">
          BUNDEL U
        </Text>
        <TextInput
          className="border-2 px-4 py-2  rounded-lg  my-2 mx-8 border-[#c4c5c7] font-Regular text-xs "
          placeholder="Enter your Email "
        />
        <TextInput
          className="border-2 px-4 py-2 rounded-lg my-2 mx-8 border-[#c4c5c7] font-Regular text-xs"
          placeholder="Enter your phone number "
        />
        <TextInput
          className="border-2 px-4 py-2  rounded-lg my-2 mx-8 border-[#c4c5c7] font-Regular text-xs"
          placeholder="Enter your password "
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          className="m-6 rounded-lg py-3  mx-8 flex flex-row justify-evenly bg-primary ">
          <Text className="text-xs text-center self-center text-white font-Bold ">
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text className="text-gray text-lg text-center  my-2 ">
          --------------or continue with-------------
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          className="rounded-lg  my-4 px-2 py-1 border-2 mx-8 flex flex-row justify-evenly border-[#c4c5c7] ">
          <Image
            className="h-8 w-8"
            source={require('../assets/images/google_logo.png')}
          />
          <Text className="text-sm text-center self-center ">
            Sign up with google
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row justify-center items-center space-x-2 mt-5">
          <Text className="text-gray text-sm text-center font-Regular ">
            Already have an account ?
          </Text>
          <Text
            className="underline text-primary text-sm font-Regular "
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
