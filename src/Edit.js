import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {UserAuthContext} from './AuthContext';
// import Edit from './Edit';
// import ProfileEditForm from './ProfileEditForm';

const Edit = ({navigation}) => {
  const [Name, setName] = useState('');
  const [Level, setLevel] = useState('');
  const [Address, setAddress] = useState('');
  const [Number, setNumber] = useState(1);
  const [Email, setEmail] = useState('');

  const {authenticated} = useContext(UserAuthContext);
  // const [isEnabled, setIsEnabled] = useState(false);
  // const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  let rerun = () => {
    firestore()
      .collection('user')
      .doc(authenticated)
      .update({
        name: Name,
        education_level: Level,
        address: Address,
        contact: Number,
        contact_email: Email,
        verified: true,
      })
      .then(() => {
        Alert.alert('Profile Updated');
      });
  };

  const getProfileData = () => {
    firestore()
      .collection('user')
      .doc(authenticated)
      .get()
      .then(value => {
        const data = value.data();

        setName(data?.name);
        setAddress(data?.address);
        setLevel(data?.education_level);
        setEmail(data?.contact_email);
        setNumber(data?.contact);
      });
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ScrollView className="bg-white flex-1">
      <Text className="text-center font-bold text-violet-600 text-lg my-2">
        BU<Text className="text-black">NDEL U</Text>
      </Text>
      <View className="relative flex-row justify-center my-2">
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
        className="flex bg-white shadow-2xl shadow-[#b5b5b5]  mx-5  p-4 my-[10px] rounded-md"
        style={styles.card}>
        <View>
          <Text className="flex-row text-lg text-black mb-3 font-semibold">
            Personal Info
          </Text>
        </View>
        <View className="flex gap-5 p-2">
          <TextInput
            className="text-black py-1 "
            placeholder="Your Name"
            keyboardType="name-phone-pad"
            value={Name}
            onChangeText={setName}
          />

          <TextInput
            className="text-black py-1"
            placeholder="Education level"
            keyboardType="name-phone-pad"
            value={Level}
            onChangeText={setLevel}
          />

          <TextInput
            className="text-black py-1"
            placeholder="Your Address"
            keyboardType="default"
            value={Address}
            onChangeText={setAddress}
          />
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
          <TextInput
            className="text-black py-1"
            placeholder="Phone"
            keyboardType="number-pad"
            maxLength={10}
            value={Number}
            onChangeText={setNumber}
          />

          <TextInput
            className="text-black py-1"
            placeholder="Your E-mail"
            keyboardType="email-address"
            value={Email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View
        className="flex bg-white shadow-2xl shadow-[#b5b5b5]  mx-5 p-4 my-[10px] rounded-md"
        style={styles.card}>
        <TouchableOpacity
          className="p-4 rounded-md bg-purple-600"
          onPress={() => {
            navigation.navigate('Account');
            rerun();
          }}>
          <Text className="text-center text-white font-semibold">Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Edit;

const styles = StyleSheet.create({});
