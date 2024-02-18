import {Alert, Button, StyleSheet, Text, View,ScrollView,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.removeItem('userId');
    Alert.alert('Logout Done !');
    navigation.navigate('Login');
  };
  return (
    <View>
      <ScrollView>
      <View className="flex flex-col justify-around  px-8 flex-1">
        <View>
          <Image
            source={require('../assets/images/bu_logo.png')}
            className="flex m-auto w-28 h-28 mt-5"
          />

          <Text className="m-auto text-3xl text-primary font-Regular my-5">
            BU<Text className="text-black">NDEL U</Text>
          </Text>
        </View>

      {/* <Button title="Logout" onPress={logout} /> */}
        <View className="my-10">
          {/* <TextInput
            className=" border-gray border rounded my-2 px-4 font-Regular text-xs py-2"
            placeholder="Enter your email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={setemail}
          /> */}

          <TouchableOpacity
            className="bg-primary  rounded-md py-3 my-5"
            onPress={logout}>
            <Text className="text-sm text-center  text-white font-Regular">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
