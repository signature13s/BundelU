import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useContext, useEffect, useState} from 'react';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {UserAuthContext} from '../AuthContext';

const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const {getUser} = useContext(UserAuthContext);

  const login = async () => {
    const user = await firestore()
      .collection('admin')
      .doc('BwNEVtBVsdWHJghy7RHP')
      .get();

    if (user.data().email == email && user.data().password == password) {
      await AsyncStorage.setItem('userType', 'admin');
      await AsyncStorage.setItem('userId', user.data().email);
      getUser();
      navigation.navigate('AdminHome');
    } else {
      Alert.alert('Wrong Credentials');
    }
  };

  return (
    <View className="flex flex-col justify-center  px-8 flex-1">
      <View>
        <Image
          source={require('../../assets/images/bu_logo.png')}
          className="flex m-auto w-28 h-28 mt-5"
        />

        <Text className="m-auto text-3xl text-primary font-Regular my-5">
          BUNDEL U
        </Text>
      </View>

      <View className="my-10">
        <TextInput
          className="border-2 px-4 py-2  rounded-lg  my-2  border-[#c4c5c7] font-Regular text-xs "
          placeholder="Enter your Email "
          onChangeText={setemail}
          value={email}
        />
        <TextInput
          className="border-2 px-4 py-2  rounded-lg my-2  border-[#c4c5c7] font-Regular text-xs"
          placeholder="Enter your password "
          onChangeText={setpassword}
          value={password}
          secureTextEntry
        />

        <TouchableOpacity
          className="bg-primary  rounded-md py-3 my-10"
          onPress={login}>
          <Text className="text-sm text-center  text-white font-Regular">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
