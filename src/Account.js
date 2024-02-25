import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserAuthContext} from './AuthContext';
import firestore from '@react-native-firebase/firestore';

const Account = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [profileData, setprofileData] = useState({});

  const {getUser, authenticated} = useContext(UserAuthContext);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const logout = async () => {
    await AsyncStorage.removeItem('userId');
    getUser();
    Alert.alert('Logout Done !');
  };

  const getProfileData = async () => {
    const data = await firestore().collection('user').doc(authenticated).get();
    setprofileData(data.data());
  };

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}>
      {/* {isEditFormOpen && (
        <ProfileEditForm close={() => {
          setIsEditFormOpen(false)
        }} />
      )} */}
      <Text className="text-center font-bold text-violet-600 text-lg my-2">
        BU<Text className="text-black">NDEL U</Text>
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
            <Text className="text-black">{profileData?.name}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray ">Education Level</Text>
            <Text className="text-black">{profileData?.education_level}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray ">Address</Text>
            <Text className="text-black">{profileData?.address}</Text>
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
            <Text className="text-black">+91 {profileData?.contact}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray ">Email</Text>
            <Text className="text-black">{profileData?.contact_email}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Edit')}
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
            <TouchableOpacity onPress={logout}>
              <Text className="text-red-600 text-lg">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({});
