import React, {useState} from 'react';
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
import auth from '@react-native-firebase/auth';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';

const Forgot = ({navigation}) => {
  const [email, setemail] = useState('');
  const send = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(async user => {
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Link Sent ! ',
          button: 'close',
        });
        navigation.navigate('Login');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <View className="bg-white flex-1">
      <View className="flex flex-col justify-around   px-8  ">
        <View>
          <Image
            source={require('../assets/images/bu_logo.png')}
            className="flex m-auto w-28 h-28 mt-5"
          />

          <Text className="m-auto text-3xl text-primary font-Regular my-5">
            BUNDEL U
          </Text>
        </View>

        <Text className="text-center font-Bold text-xl text-black">
          Forgot Password
        </Text>

        <Text className="text-center py-3 font-Regular">
          Don't worry! it happens. Please enter the email associated with your
          account.
        </Text>

        <View className="my-2">
          <TextInput
            className=" border-gray border rounded my-2 px-4 font-Regular text-xs py-2"
            placeholder="Enter your email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={setemail}
          />

          <TouchableOpacity
            className="bg-primary  rounded-md py-3 my-5"
            onPress={send}>
            <Text className="text-sm text-center  text-white font-Regular">
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="  flex flex-row justify-center  space-x-2 absolute bottom-20 mx-auto w-full">
        <Text className="text-sm font-Regular ">Remember Password ?</Text>
        <TouchableOpacity>
          <Text className="text-sm text-primary font-Regular ">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Forgot;
