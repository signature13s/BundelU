import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ProfileEditForm from './ProfileEditForm';

const Account = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  // const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const logout = async () => {
    await AsyncStorage.removeItem('userId');
    Alert.alert('Logout Done !');
    navigation.navigate('Login');
  };
  return (
    <View className="bg-white flex-1">
      {/* {isEditFormOpen && (
        <ProfileEditForm close={() => {
          setIsEditFormOpen(false)
        }} />
      )} */}
      <Text className="text-center font-bold text-violet-600 text-lg my-2">
        BUNDEL U
      </Text>
      <View className="relative flex-row justify-center my-2">
        {/* <Image
          className="absolute w-[72px] h-[72px] top-10 right-[130px] z-50"
          source={require('./../assets/images/edit.png')}
        /> */}
        <Image
          className="flex w-24 h-24 "
          style={{
            borderWidth: 4,
            borderColor: 'rgb(153, 0, 255)',
            borderRadius: 100, // Border width
          }}
          source={require('../assets/images/bu_logo.png')}
        />
      </View>

      <View
        className="flex bg-white shadow-2xl shadow-[#b5b5b5]  mx-5 p-4 my-[10px] rounded-md"
        style={styles.card}>
        <View>
          <Text className="flex-row text-lg text-black mb-3 font-semibold">
            Personal Info
          </Text>
        </View>
        <View className="flex gap-5 p-2">
          <View className="flex-row justify-between">
            <Text className="text-gray ">Your Name</Text>
            <Text className="text-black">Siddhant Raj</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray ">Education Level</Text>
            <Text className="text-black">Bachelor</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray ">Address</Text>
            <Text className="text-black">Jhansi, Uttar Pradesh</Text>
          </View>
        </View>
      </View>
      <View
        className="flex bg-white shadow-2xl shadow-[#b5b5b5]  mx-5 p-4 my-[10px] rounded-md"
        style={styles.card}>
        <View>
          <Text className="flex-row text-lg text-black mb-3 font-semibold">
            Contact Info
          </Text>
        </View>
        <View className="flex gap-5 p-2">
          <View className="flex-row justify-between">
            <Text className="text-gray ">Phone number</Text>
            <Text className="text-black">+91 8303109832</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray ">Email</Text>
            <Text className="text-black">rajsiddhant284@gmail.com</Text>
          </View>
          <TouchableOpacity
            className="p-4 rounded-md bg-purple-600"
            // onPress={() => {
            //   setIsEditFormOpen(true);
            // }}
          >
            <Text className="text-center text-white font-semibold">Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        className="flex bg-white shadow-2xl shadow-[#b5b5b5]  mx-5 p-4 my-[10px] rounded-md"
        style={styles.card}>
        <View>
          <Text className="flex-row text-lg text-black mb-3 font-semibold">
            Personal Info
          </Text>
        </View>
        <View className="flex gap-4 p-2">
          <View className="flex-row justify-between">
            <Text className="text-gray ">Email Notification</Text>
            <Switch
              trackColor={{false: '#767577', true: 'rgb(124, 58, 237) '}}
              thumbColor={isEnabled ? 'white' : 'white'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-red-600 text-lg">Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
