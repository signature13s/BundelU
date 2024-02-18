import {Alert, Button, StyleSheet, Text, View} from 'react-native';
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
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
