import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserAuthContext} from './AuthContext';

const Splash = ({navigation, route}) => {
  const checkUser = async () => {
    const User = await AsyncStorage.getItem('userId');
    const userType = await AsyncStorage.getItem('userType');
    if (User == null && userType == null) {
      navigation.navigate('Onboarding');
    } else if (userType == 'admin' && User) {
      navigation.navigate('AdminHome');
    } else {
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkUser();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex bg-white justify-center items-center h-full">
      <View>
        <Animatable.Image
          animation="zoomInUp"
          duration={1500}
          source={require('../assets/images/bu_logo.png')}
          className="w-48 h-48"
        />
      </View>
      <View className="flex gap-2">
        {/* <Animatable.Text /> */}
        <Animatable.Text
          animation="zoomInUp"
          iterationCount={1}
          duration={2000}
          direction="alternate"
          className="text-center font-bold text-violet-600 text-lg mt-5">
          BU<Text className='text-black'>NDEL U</Text>
        </Animatable.Text>
        {/* <Text className="text-center font-bold text-violet-600 text-lg">
          Bundel U
        </Text> */}
        <Animatable.Text
          animation="zoomIn"
          iterationCount={1}
          duration={2000}
          direction="alternate"
          className="text-center text-yellow-600 font-Italic ">
          An App developed by Students for Students
        </Animatable.Text>

        <Text></Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
