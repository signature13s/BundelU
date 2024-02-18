import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const {PermissionsAndroid} = require('react-native');

const Addnotes = () => {
  const useImageLibraryPicker = async () => {
    let options = {
      saveToPhotos: false,
      mediaType: 'photo',
    };

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchImageLibrary(options);
      return result.assets[0].uri;
    }
  };

  return (
    <View>
      <Text onPress={useImageLibraryPicker}>Addnotes</Text>
    </View>
  );
};

export default Addnotes;

const styles = StyleSheet.create({});
