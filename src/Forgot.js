import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Forgot = ({navigation}) => {
  return (
    <ScrollView>
      <View className="flex flex-col justify-around  px-8 flex-1">
        <View>
          <Image
            source={require('../assets/images/bu_logo.png')}
            className="flex m-auto w-28 h-28 mt-5"
          />

          <Text className="m-auto text-3xl text-primary font-Regular my-5">
            BUNDEL U
          </Text>
        </View>

        <View className="my-10">
          <TextInput
            className=" border-gray border rounded my-2 px-4 font-Regular text-xs py-2  placeholder-black text-black"
            placeholderTextColor={"gray"}
            placeholder="Enter your email Address"
            keyboardType="email-address"
          />
          <TextInput
            className="border  border-gray rounded my-2 px-4 font-Regular text-xs py-2 text-black"
            placeholderTextColor={"gray"}
            placeholder="Enter OTP"
            secureTextEntry={true}
          />
          <Text
            className="text-right font-Bold text-primary my-4 text-xs"
            onPress={() => {
              navigation.navigate('Forgot');
            }}>
            Forgot Password ?
          </Text>
          <TouchableOpacity className="bg-primary  rounded-md py-3">
            <Text className="text-sm text-center  text-white font-Regular">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text className="text-center text-sm py-10 text-black">
            ------ or continue with ------
          </Text>

          <TouchableOpacity className="border rounded flex-row  justify-center space-x-4 items-center py-1">
            <Image
              source={require('../assets/images/google_logo.png')}
              className=" w-8 h-8"
            />
            <Text className="text-center py-2 text-sm font-Regular text-black">
              Login up with Google
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row py-2 justify-center space-x-2 mt-5">
            <Text className="text-center  font-Regular text-black">
              Don't have an account?
            </Text>

            <Text
              className="font-Regular text-primary"
              onPress={() => {
                navigation.navigate('Register');
              }}>
              Register
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Forgot;
