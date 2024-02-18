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
              Send Reset Link
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Forgot;
