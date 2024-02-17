import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View className="flex flex-col h-full px-4 bg-white">
      <View className="basis-1/5 justify-center ">
        <Image
          source={require('../assets/Images/logo.png')}
          className="flex m-auto w-28 h-28"
        />
      </View>
      <View className="basis-1/8">
        <Text className="m-auto text-4xl text-[#861FFD] font-Regular">
          BUNDEL U
        </Text>
      </View>
      <View className="my-10">
        <TextInput
          className=" border-[#5f615f] border rounded my-2 px-4 font-Regular text-xs py-2"
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          className="border  border-[#5f615f] rounded my-2 px-4 font-Regular text-xs py-2 "
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity className="bg-[#861FFD]  rounded-md py-4">
        <Text className="text-sm text-center  text-white font-Regular">
          Login
        </Text>
      </TouchableOpacity>

      <Text className="text-center text-xl py-10">
        ------------- or continue with --------------
      </Text>

      <TouchableOpacity className="border rounded flex-row  justify-center space-x-4 items-center">
        <Image
          source={require('../assets/Images/glogo.jpeg')}
          className=" w-8 h-8"
        />
        <Text className="text-center py-4 text-sm font-Regular">
          Login up with Google
        </Text>
      </TouchableOpacity>
      <View className="flex flex-row py-4 justify-center space-x-2">
        <Text className="text-center text-l font-Regular">
          Don't have an account?
        </Text>

        <Text
          className="font-Regular text-primary"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Register
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
