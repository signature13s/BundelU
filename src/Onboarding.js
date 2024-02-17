import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Onboarding = ({navigation}) => {
  return (
    <View className="flex  flex-col justify-around items-center bg-white h-screen px- flex-1 px-8 ">
      <Animatable.Text animation="zoomInDown">
        <Text className="text-center font-Bold text-3xl   text-black font-medium">
          Welcome
        </Text>
      </Animatable.Text>

      <View className="flex flex-col justify-center items-center">
        <Animatable.Image
          animation="slideInDown"
          source={require('../assets/images/bu_logo.png')}
          resizeMode="contain"
          className="h-64 w-64 opacity-25"
        />

        <View className="absolute top-24 flex flex-row  w-full  justify-center">
          <Animatable.Text animation="zoomInDown">
            <Text className="text-primary font-Regular font-bold text-4xl   opacity-100 text-center  ">
              BU
            </Text>
            <Text className=" font-bold text-4xl   text-black opacity-100  font-Regular ">
              NDEL U
            </Text>
          </Animatable.Text>
        </View>

        <Text className="text-center text-black font-Bold my-8 absolute top-28">
          Made with ❤️ By BUians for the world
        </Text>
      </View>

      <Animatable.Text className="my-10 text-clip text-sm font-Regular font-medium text-slate-900 text-center">
        Bundel U is one stop platform where user can attend different mock-exams
        with ease of our mobiles and web app.This is not just provides the
        mock-exams, it gives user better understanding of the topic.
      </Animatable.Text>

      <Animatable.View animation="zoomInDown" className="w-full">
        <TouchableOpacity
          className="bg-primary   py-4  rounded-xl"
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text className="text-white text-center font-Bold ">Continue</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
